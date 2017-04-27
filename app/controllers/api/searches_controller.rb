class Api::SearchesController < ApplicationController
  def search
    results = PgSearch.multisearch(params[:searchText])

    @results = results.map{|result|
      if result.searchable_type == "User"
        {
          text: result.content,
          value: "/home/users/#{result.searchable_id}"
        }
      elsif result.searchable_type == "Sauce"
        {
          text:  result.content,
          value: "/home/users/#{result.searchable_id}"
        }
      end
    }
    debugger
    render :show
  end
end
