class Api::RoutesController < ApplicationController

  def index
    @routes = Route.all
  end

  def show
    @route = Route.find(params[routeId])
  end


  def create
    @route = Route.new(route_params)
    if @route.save
      render :show
    else
      render json: @route.errors.full_messages, status: 418
    end
  end

  private

  def route_params
    params.require(route).permit(:user_id, :description, :request, :name)
  end
end
