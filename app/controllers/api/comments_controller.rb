class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.findby(run_id: params[:run_id]).includes(:user)
  end

  def create
    @comment = Comment.new({body: params[:body], run_id: params[:run_id]})
    @comment.user = current_user
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end
end
