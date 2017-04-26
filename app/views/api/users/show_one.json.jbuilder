json.set! :user do
  json.partial! 'api/users/user', user: @user
end

json.sauces do
  if @sauces.present?
    @sauces.each do |sauce|
      json.set! sauce.id do
        json.partial! 'api/sauces/sauce', sauce: sauce
      end
    end
  end
end

json.checkins do
  if @checkins.present?
    @checkins.each do |checkin|
      json.set! checkin.id do
        json.partial! 'api/checkins/checkin', checkin: checkin
      end
    end
  end
end
