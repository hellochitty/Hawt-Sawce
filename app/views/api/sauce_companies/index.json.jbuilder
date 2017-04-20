json.array! @companies do |company|
  json.extract! company, :id, :name
end
