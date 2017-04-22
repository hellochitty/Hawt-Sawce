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
end
