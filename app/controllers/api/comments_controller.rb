class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.includes(:user).where(run_id: params[:run_id])
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
