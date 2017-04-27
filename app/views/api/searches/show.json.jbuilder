json.array! @results do |result|
  json.extract! result, :text, :value
end
