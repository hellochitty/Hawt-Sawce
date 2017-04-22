json.extract! checkin, :id, :overall_rating, :heat_rating, :comment, :user_id, :sauce_id
json.user  checkin.user.username
json.sauce  checkin.sauce.name
