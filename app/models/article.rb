# == Schema Information
#
# Table name: articles
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  url        :string           not null
#  sector_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Article < ApplicationRecord
  validates :title, :url, :sector_id, presence: true
  validates :url, uniqueness: {scope: :sector_id}

  belongs_to :sector
end
