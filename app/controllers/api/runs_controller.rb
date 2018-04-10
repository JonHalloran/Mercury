class Api::RunsController < ApplicationController

  def index
    @runs = current_user.runs
  end

  def show
    @run = Run.find(params[:runId])
  end

  def create
    @run = Run.new(run_params)
    @run.user = current_user
    if @run.save
      render :show
    else
      render json: @run.errors.full_messages, status: 422
    end
  end

  def run_params
    params.require(:run).permit(:duration, :route_id, :date)
  end

end
