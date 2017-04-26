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
    if @sauce.save
      render :show
    else
      render json: @sauce.errors.messages, status: 422
    end
  end

  def update
    @sauce = Sauce.find(params[:id])
    params = sauce_params.permit(:name, :description, :scoville_units, :image_url, :image)
    if sauce_params['company'] == ''
      params['company_id'] = nil
    else
      params['company_id'] = SauceCompany.find_by_name(sauce_params['company']).id
    end

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
  # 1- newest
  # 2- oldest
  # 3- scoville desc
  # 4- scoville asc
  # 5- checkins desc
  # 6- checkins asc
  # 7- avg rating desc
  # 8- avg rating asc

  def order
    if (1..10) === params[:id].to_i
      case params[:id].to_i
      when 1
        @sauces = Sauce.order(id: :desc)
      when 2
        @sauces = Sauce.order(id: :asc)
      when 3
        @sauces = Sauce.order(scoville_units: :desc)
      when 4
        @sauces = Sauce.order(scoville_units: :asc)
      when 5
        @sauces = Sauce
                    .joins("LEFT OUTER JOIN checkins ON checkins.sauce_id = sauces.id")
                      .group("sauces.id").order("COUNT(checkins.id) DESC")
      when 6
        @sauces = Sauce
                    .joins("LEFT OUTER JOIN checkins ON checkins.sauce_id = sauces.id")
                      .group("sauces.id").order("COUNT(checkins.id) ASC")
      when 7
        @sauces = Sauce
                    .joins("LEFT OUTER JOIN checkins ON checkins.sauce_id = sauces.id")
                      .group("sauces.id")
                        .having("COUNT(checkins.id)>0")
                          .order("AVG(checkins.overall_rating) DESC")
      when 8
        @sauces = Sauce
                    .joins("LEFT OUTER JOIN checkins ON checkins.sauce_id = sauces.id")
                      .group("sauces.id")
                        .having("COUNT(checkins.id)>0")
                          .order("AVG(checkins.overall_rating) ASC")
      when 9
        @sauces = Sauce
                    .joins("LEFT OUTER JOIN checkins ON checkins.sauce_id = sauces.id")
                      .group("sauces.id")
                        .having("COUNT(checkins.id)>0")
                          .order("AVG(checkins.heat_rating) DESC")
      when 10
        @sauces = Sauce
                    .joins("LEFT OUTER JOIN checkins ON checkins.sauce_id = sauces.id")
                      .group("sauces.id")
                        .having("COUNT(checkins.id)>0")
                          .order("AVG(checkins.heat_rating) ASC")
      end
      render :order
    else
      render json: {base:['Invalid order']}, status: 404
    end
  end

  private
  def sauce_params
    params.require(:sauce).permit(:name, :company, :description, :scoville_units, :image_url, :image)
  end

end
