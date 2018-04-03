class User < ApplicationRecord
  validates :email,
            :first_name,
            :last_name,
            :password,
            :session_token,
            presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { min: 6, allow_nil: true }
  before_validation :ensure_session_token

  attr_reader :password

  def self.find_user_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && BCrypt::Password.new(user.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def reset_session_token
    self.session_token = generate_session_token
    self.save!
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
end
