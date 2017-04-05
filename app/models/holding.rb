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
    user = User.find(self.user_id)
    company = Company.find(self.company_id)
    #update company share price here (live http request)
    user.update_attribute(:cash_on_hand, user.cash_on_hand - amount * company.share_price)
    #here could be some return value
  end

  #could be renamed to owner; in that case other instances of user...
  #... should prob be changed to owner as well
  # def user
  #   User.find(self.user_id)
  # end

  def sell(amount)
    if amount > self.amount
      throw "Can't sell more than you own!"
    else
      self.update_attribute(:amount, self.amount - amount)
      user = User.find(self.user_id)
      company = Company.find(self.company_id)
      #update company share price here (live http request)
      user.update_attribute(:cash_on_hand, user.cash_on_hand + amount * company.share_price)
    end
    #code for updating user can be cleaned up and/or abstracted
    #some return value
  end

end
