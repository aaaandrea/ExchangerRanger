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

class Company < ApplicationRecord
  validates :name, :symbol, :share_price, presence: true
  validates :name, :symbol, uniqueness: true

  has_many :holdings
  has_many :shareholders, through: :holdings, source: :user
end
