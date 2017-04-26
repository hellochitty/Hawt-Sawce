json.extract! user, :id, :username, :description, :num_checkins, :num_sauces
json.join_date user.created_at
