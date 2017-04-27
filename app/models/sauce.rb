# == Schema Information
#
# Table name: sauces
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  description        :text
#  scoville_units     :integer
#  image_url          :string
#  company_id         :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Sauce < ApplicationRecord
  validates :name, uniqueness: { scope: :company_id }
  validates :name, :company_id, presence: true
  validates_inclusion_of :scoville_units, :in => 0..3000000, message: "too far off the charts"
  has_attached_file :image, default_url: "hotsauce.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  include PgSearch
  multisearchable :against => [:name]


  belongs_to :company,
    class_name: 'SauceCompany',
    foreign_key: :company_id,
    primary_key: :id,
    inverse_of: :sauces

  has_many :checkins,
    class_name: 'Checkin',
    foreign_key: :sauce_id,
    primary_key: :id,
    inverse_of: :sauce,
    dependent: :destroy

  def average_overall
    checkins.average(:overall_rating)
  end

  def average_heat
    checkins.average(:heat_rating)
  end

  def total_reviews
    checkins.count(:overall_rating)
  end
end
