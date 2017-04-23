class Api::CheckinsController < ApplicationController
  def index
    @checkins = Checkin.all
    render :index
  end

  def show
    @checkin = Checkin.find(params[:id])
    render :show
  end

  def destroy
    @checkin = Checkin.find(params[:id])
    if @checkin
      @checkin.destroy
      render :show
    else
      render json: {delete:['Checkin Does Not Exist']}, status: 404
    end
  end

  def create
    @checkin = Checkin.new(checkin_params)
    if @checkin.save
      render :show
    else
      render json: @checkin.errors.messages, status: 422
    end
  end

  private
  def checkin_params
    params.require(:checkin).permit(:user_id, :sauce_id, :comment, :heat_rating, :overall_rating)
  end
end
