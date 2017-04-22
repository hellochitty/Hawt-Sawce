# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  description     :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :email, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :checkins,
    class_name: 'Checkin',
    foreign_key: :user_id,
    primary_key: :id,
    inverse_of: :user,
    dependent: :destroy

  has_many :sauces,
    through: :checkins,
    source: :sauce

  attr_reader :password
  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && BCrypt::Password.new(user.password_digest).is_password?(password)
    nil
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end


  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
    self.description = ''
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = SecureRandom.urlsafe_base64(16)
    end
  end

end
