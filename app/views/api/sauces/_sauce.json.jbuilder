json.extract! sauce, :id, :name, :description, :scoville_units
json.company  sauce.company.name
json.image_url asset_path(sauce.image.url(:original))
