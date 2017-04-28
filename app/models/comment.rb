class Comment < ApplicationRecord
  validates :body, :user_id, :checkin_id, presence: true

  belongs_to :checkin,
    class_name: 'Checkin',
    foreign_key: :checkin_id,
    primary_key: :id,
    inverse_of: :comments
end
