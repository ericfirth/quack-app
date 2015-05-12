class User < ActiveRecord::Base
  validates :username, :session_token, :password_digest, :email, precense: true
  validates :username, :session_token, :password_digest, :email, uniqueness: true
  validates :password, length: { minimum: 7, allow_nil: true }

  after_initialize :ensure_session_token

  attr_reader :password

  def self.search_by_credentials(username, password)
    user = User.find_by_username(user_params[:username])
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

end
