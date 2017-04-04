# == Schema Information
#
# Table name: stock_shares
#
#  id         :integer          not null, primary key
#  stock_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class StockShareTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
