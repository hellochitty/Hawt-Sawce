json.extract! sauce, :id, :name, :description, :scoville_units,
  :average_overall, :average_heat, :total_reviews, :created_at
json.company  sauce.company.name
json.image_url image_path(sauce.image.url)
