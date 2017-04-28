json.partial! 'checkin', checkin: @checkin
json.set! :comments do
  json.array! @comments do |comment|
    json.extract! comment, :id, :body, :created_at
    json.commenter_id comment.user_id
    json.commenter comment.commenter.username
    json.commenter_image_url image_path(comment.commenter.image.url)
  end
end
