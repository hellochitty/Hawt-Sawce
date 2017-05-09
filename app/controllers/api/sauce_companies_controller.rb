class Api::SauceCompaniesController < ApplicationController
  def index
    @companies = SauceCompany.all
    render :index
  end
end
