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

  def find_by_id
    @user = User.find(params[:id])
    @checkins = @user.checkins if @user.checkins
    @sauces = @user.sauces.uniq if @user.sauces
    render 'api/users/show_one'
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_update_params)
      render 'api/users/show_one'
    else
      render json: @user.errors.messages, status: 422
    end
  end

  private

  def user_signup_params
    params.require(:user).permit(:username, :password, :email)
  end

  def user_update_params
    params.require(:user).permit(:description)
  end
end
