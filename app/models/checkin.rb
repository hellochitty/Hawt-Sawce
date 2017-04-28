# == Schema Information
#
# Table name: checkins
#
#  id                 :integer          not null, primary key
#  overall_rating     :integer          not null
#  heat_rating        :integer          not null
#  comment            :text
#  user_id            :integer          not null
#  sauce_id           :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Checkin < ApplicationRecord
  validates :overall_rating, :heat_rating, :user_id, :sauce_id, presence: true
  validates :overall_rating, :inclusion => {:in => [1,2,3,4,5]}
  validates :heat_rating, :inclusion => {:in => [1,2,3,4,5]}
  has_attached_file :image, default_url: "hotsauce.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  attr_accessor :image_file_name

  belongs_to :user,
    class_name: 'User',
    foreign_key: :user_id,
    primary_key: :id,
    inverse_of: :checkins

  belongs_to :sauce,
    class_name: 'Sauce',
    foreign_key: :sauce_id,
    primary_key: :id,
    inverse_of: :checkins

  has_many :comments,
    class_name: 'Comment',
    foreign_key: :checkin_id,
    primary_key: :id,
    inverse_of: :checkin,
    dependent: :destroy
end
