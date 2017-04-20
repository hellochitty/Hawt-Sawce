class Api::SaucesController < ApplicationController

  def index
    @sauces = Sauce.all.includes(:company)
    render :index
  end

  def show
    @sauce = Sauce.find(params[:id])
    render :show
  end

end
