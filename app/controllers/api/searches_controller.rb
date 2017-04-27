class Api::SearchesController < ApplicationController
  def search
    results = PgSearch.multisearch(params[:searchText])

    @results = results.map{|result|
      if result.searchable_type == "User"
        {
          value: 
        }
      elsif result.searchable_type == "Sauce"

      end
    }
    debugger
    render :show
  end
end
