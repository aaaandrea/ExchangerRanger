# == Schema Information
#
# Table name: sectors
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Sector < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :articles
end
