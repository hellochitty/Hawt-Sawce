json.extract! sauce, :id, :name, :description, :scoville_units
json.company  sauce.company.name
json.image_url sauce.image_url
# json.company do sauce.company.name end
