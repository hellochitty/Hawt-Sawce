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
    params = sauce_params.permit(:name, :description, :scoville_units, :image_url, :image)
    if sauce_params['company'] == ''
      params['company_id'] = nil
    else
      params['company_id'] = SauceCompany.find_by_name(sauce_params['company']).id
    end
    @sauce = Sauce.new(params)
    debugger
    if @sauce.save
      render :show
    else
      render json: @sauce.errors.messages, status: 422
    end
  end

  def update
    @sauce = Sauce.find(params[:id])
    params = sauce_params.permit(:name, :description, :scoville_units, :image_url, :image)
    params["company_id"] = SauceCompany.find_by_name(sauce_params["company"]).id

    if @sauce.update(params)
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
    params.require(:sauce).permit(:name, :company, :description, :scoville_units, :image_url, :image)
  end
end
