# == Schema Information
#
# Table name: holdings
#
#  id         :integer          not null, primary key
#  company_id :integer          not null
#  user_id    :integer          not null
#  amount     :integer          default("0"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Holding < ApplicationRecord
  validates :company_id, :user_id, :amount, presence: true

  belongs_to :user
  belongs_to :company
end
