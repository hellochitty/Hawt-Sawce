json.extract! checkin, :id, :overall_rating, :heat_rating, :comment, :user_id, :sauce_id, :updated_at
json.user  checkin.user.username
json.user_image_url  asset_path(checkin.user.image.url)
json.sauce  checkin.sauce.name
json.sauce_id  checkin.sauce.id
json.image_url asset_path(checkin.image.url)
