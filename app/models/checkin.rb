# == Schema Information
#
# Table name: checkins
#
#  id             :integer          not null, primary key
#  overall_rating :integer          not null
#  heat_rating    :integer          not null
#  comment        :text
#  user_id        :integer          not null
#  sauce_id       :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Checkin < ApplicationRecord
  validates :overall_rating, :heat_rating, :user_id, :sauce_id, presence: true
  validates :overall_rating, :inclusion => {:in => [1,2,3,4,5]}
  validates :heat_rating, :inclusion => {:in => [1,2,3,4,5]}
  has_attached_file :image, default_url: "doge.jpeg"
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
end
