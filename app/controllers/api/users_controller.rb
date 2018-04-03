class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def show
    @user = User.find_by(user_params.email)
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "/"
    else
      render json: @user.errors.full_messages, status: 418
    end
  end

  def update
    @user = User.find(params.id)
     unless current_user == @user
       render json: { base: ['invalid credentials'] }, status: 401
    if @user.update(user_params)
      render "/"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  private
  def user_params
    params.require(user).permit(email, password, first_name, last_name, photo_url)
  end
end
