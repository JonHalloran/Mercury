class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    @user.photo_url = 'https://res.cloudinary.com/dtw7iteso/image/upload/v1522964206/Mercury/Hermes_pushkin_01.jpg'
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 418
    end
  end

  def update
    @user = User.find(params.id)
    unless current_user == @user
      render json: {base: ['invalid credentials']}, status: 401
    end
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :photo_url)
  end
end
