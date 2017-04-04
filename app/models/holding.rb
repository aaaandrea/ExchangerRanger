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
  validates :amount, greater_than_or_equal_to: 0

  belongs_to :user
  belongs_to :company

  def buy(amount)
    self.update_attribute(:amount, self.amount+amount)
  end

  def sell(amount)
    if amount > self.amount
      throw "Can't sell more than you own!"
    else
      self.update_attribute(:amount, self.amount - amount)
    end
  end

end
