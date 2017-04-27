class Api::SearchesController < ApplicationController
  def search
    results = PgSearch.multisearch(params[:searchText])
    @results = results.map{|result|
      if result.searchable_type == "User"
        {
          text: "user: #{result.content}",
          value: "/home/users/#{result.searchable_id}"
        }
      elsif result.searchable_type == "Sauce"
        {

          text:  "#{result.content} - #{Sauce.find(result.searchable_id).company.name}",
          value: "/home/sauces/#{result.searchable_id}"
        }
      end
    }
    render :show
  end
end
