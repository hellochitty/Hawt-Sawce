class Api::SaucesController < ApplicationController

  def index
    @sauces = Sauce.all.includes(:company)
    render :index
  end

  def show
    @sauce = Sauce.find(params[:id])
    render :show
  end

  def destroy
    @sauce = Sauce.find(params[:id])
    if @sauce
      @sauce.delete
      render :show
    else
      render json: {delete:['Sauce Does Not Exist']}, status: 404
    end
  end

end
