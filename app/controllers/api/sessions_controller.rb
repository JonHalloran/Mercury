class Api::SessionsController < ApplicationController

  def create
    @user = User.find_user_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      p session
      render 'api/users/show'
    else
      render json: ['Invalid Login Credentials!'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render 'api/users/show'
    else
      render json: ["You were already logged out!!! Yay!!!"], status: 401
    end
  end
end
