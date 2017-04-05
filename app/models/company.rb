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

require 'open-uri'
require 'nokogiri'

class Company < ApplicationRecord
  validates :name, :symbol, :share_price, presence: true
  validates :name, :symbol, uniqueness: true

  has_many :holdings
  has_many :shareholders, through: :holdings, source: :user

  def self.find_value(symbol)
   url = "https://www.google.com/finance/getprices?i=60&p=1d&f=c&q=#{symbol}"
   doc = Nokogiri::HTML(open(url))
   stock_full_info = doc.css('pre')
   debugger
   stock_prices = stock_full_info[0].outerText.split(/\n/)
   current_price = stock_prices[stock_prices.length - 2]
   current_price
 end
end
