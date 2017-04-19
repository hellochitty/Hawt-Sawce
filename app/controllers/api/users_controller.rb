class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_signup_params)

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.messages, status: 422
    end
  end

  def user_signup_params
    params.require(:user).permit(:username, :password, :email)
  end
end
