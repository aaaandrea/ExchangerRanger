require 'open-uri'
require 'nokogiri'
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

  def self.find_value(symbol)
    symbol = symbol.upcase
    url = "https://www.google.com/finance/getprices?i=60&p=1d&f=c&q=#{symbol}"
    doc = Nokogiri::HTML(open(url))
    current_price = doc.text.split(/\n/).last
    current_price
  end
end
