json.array! @results do |result|
  json.extract! result, :id
  # json.merge! result.attributes
end
