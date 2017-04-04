# == Schema Information
#
# Table name: companies
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  symbol      :string           not null
#  share_price :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class CompanyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
