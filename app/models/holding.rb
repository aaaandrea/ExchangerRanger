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
  validate :non_negative_amount

  belongs_to :user
  belongs_to :company

  def trade(amount)
    if (self.amount + amount < 0)
      flash.now[:errors] = "can't have negative amount"
      return
    end
    self.update_attribute(:amount, self.amount+amount)
    user = User.find(self.user_id)
    company = Company.find(self.company_id)
    #update company share price here (live http request)
    user.update_attribute(:cash_on_hand, user.cash_on_hand - amount * company.share_price)
    #here could be some return value
  end

  # def buy(amount)
  #   self.update_attribute(:amount, self.amount+amount)
  #   user = User.find(self.user_id)
  #   company = Company.find(self.company_id)
  #   #update company share price here (live http request)
  #   user.update_attribute(:cash_on_hand, user.cash_on_hand - amount * company.share_price)
  #   #here could be some return value
  # end
  #
  # def sell(amount)
  #   if amount > self.amount
  #     throw "Can't sell more than you own!"
  #   else
  #     self.update_attribute(:amount, self.amount - amount)
  #     user = User.find(self.user_id)
  #     company = Company.find(self.company_id)
  #     #update company share price here (live http request)
  #     user.update_attribute(:cash_on_hand, user.cash_on_hand + amount * company.share_price)
  #   end
  #   #code for updating user can be cleaned up and/or abstracted
  #   #some return value
  # end

  def non_negative_amount
    errors[:amount] << "cannot be negative" unless amount >= 0
  end

end
