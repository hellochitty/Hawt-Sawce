# == Schema Information
#
# Table name: sauces
#
#  id             :integer          not null, primary key
#  name           :string           not null
#  description    :text
#  scoville_units :integer
#  image_url      :string           not null
#  company_id     :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Sauce < ApplicationRecord
  validates :name, uniqueness: { scope: :company_id }
  validates :name, :company_id, presence: true
  has_attached_file :image, default_url: "doge.jpeg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :company,
    class_name: 'SauceCompany',
    foreign_key: :company_id,
    primary_key: :id,
    inverse_of: :sauces

end
