class Api::RoutesController < ApplicationController

  def index
    searchHash = route_search_params
    if searchHash[my] == true
      @routes = current_user.routes
      render :index
    else
      @routes = Route.all
      render :index
    end

  end

  def show
    p params
    @route = Route.find(params[:id])
  end


  def create
    @route = Route.new(route_params)
    @route.creator = current_user
    p @route
    if @route.save
      render :show
    else
      render json: @route.errors.full_messages, status: 418
    end
  end

  private

  def route_params
    params.require(:route).permit(:description, :name, :request, :lat, :log, :elevation, :origin, :img_url, :distance)
  end

  def route_search_params
    params.require(:route).permit(:distance, :name, :location, :my, :distance_type)
  end

end
