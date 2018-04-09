class Api::RoutesController < ApplicationController

  def index


    @routes = Route.all.where("name LIKE '%#{params[:name]}%'")
    if (params[:dist_type] != 'dist_type')
      @routes = @routes.where("distance #{params[:dist_type]} #{params[:distance]}")
    end
    @routes = @routes.limit(10)
    p @routes
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


end
