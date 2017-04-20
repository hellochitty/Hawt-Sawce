@sauces.each do |sauce|
  json.set! sauce.id do
    json.partial! 'sauce', sauce: sauce
  end
end
