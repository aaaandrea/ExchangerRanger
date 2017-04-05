# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  cash_on_hand           :integer          default("1000000"), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null

class User < ApplicationRecord
  attr_reader :password

  validates :username, :password_digest, :session_token, :cash_on_hand, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: :true

  has_many :holdings
  has_many :stocks, through: :holdings, source: :company
  #through source relationships here and in company may actually be unnecessary
  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness
  #maybe should be before_action? before_validation is just new to me so maybe not

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  #can also be used to update net worth
  def net_worth
    result = self.cash_on_hand
    self.holdings.each do |holding|
      share_price = holding.company.share_price
      result += share_price * holding.amount
    end
    @net_worth = result
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.password_is?(password) ? user : nil
  end

  def password_is?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def new_session_token
    SecureRandom.base64
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
  end

end
