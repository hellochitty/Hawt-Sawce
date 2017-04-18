class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid username/password combination'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {}
    else
      render json: ["No one signed in"], status: 404
    end
  end

  def user_login_params
    params.require(:user).permit(:username, :password)
  end
end
