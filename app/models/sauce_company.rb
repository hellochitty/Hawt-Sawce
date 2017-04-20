# == Schema Information
#
# Table name: sauce_companies
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SauceCompany < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :sauces,
    class_name: 'Sauce',
    foreign_key: :company_id,
    primary_key: :id,
    inverse_of: :company,
    dependent: :destroy


end
