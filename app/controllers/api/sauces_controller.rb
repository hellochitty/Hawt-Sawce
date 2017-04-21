class Api::SaucesController < ApplicationController

  def index
    @sauces = Sauce.all.includes(:company)
    render :index
  end

  def show
    @sauce = Sauce.find(params[:id])
    render :show
  end

  def create
    params = sauce_params.permit(:name, :description, :scoville_units, :image_url)
    params["company_id"] = SauceCompany.find_by_name(sauce_params["company"]).id
    @sauce = Sauce.new(params)

    if @sauce.save
      render :show
    else
      render json: @sauce.errors.messages, status: 422
    end
  end

  def destroy
    @sauce = Sauce.find(params[:id])
    if @sauce
      @sauce.destroy
      render :show
    else
      render json: {delete:['Sauce Does Not Exist']}, status: 404
    end
  end

  private
  def sauce_params
    params.require(:sauce).permit(:name, :company, :description, :scoville_units, :image_url)
  end
end
