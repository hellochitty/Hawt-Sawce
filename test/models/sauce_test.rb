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

require 'test_helper'

class SauceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
