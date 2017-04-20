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
  validates :name, :image_url, :company_id, presence: true

  belongs_to :company,
    class_name: 'SauceCompany',
    foreign_key: :company_id,
    primary_key: :id,
    inverse_of: :sauces

end
