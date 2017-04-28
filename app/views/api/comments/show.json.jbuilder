json.extract! @checkin, :id, :overall_rating, :heat_rating, :comment, :user_id, :sauce_id, :updated_at
json.user  @checkin.user.username
json.user_image_url  asset_path(@checkin.user.image.url)
json.sauce  @checkin.sauce.name
json.sauce_id  @checkin.sauce.id
json.image_url asset_path(@checkin.image.url)

json.set! :comments do
  json.array! @comments do |comment|
    json.extract! comment, :id, :body, :created_at
    json.commenter_id comment.user_id
    json.commenter comment.commenter.username
    json.commenter_image_url image_path(comment.commenter.image.url)
  end
end
