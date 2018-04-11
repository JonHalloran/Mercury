class User < ApplicationRecord
  validates :email,
            :first_name,
            :last_name,
            :session_token,
            presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  before_validation :ensure_session_token

  attr_reader :password

  has_many :routes,
           class_name: :Route,
           foreign_key: :user_id

  has_many :runs

  has_many :comments

  def self.find_user_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && BCrypt::Password.new(user.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save!
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
end
