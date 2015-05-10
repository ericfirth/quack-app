class User < ActiveRecord::Base
  attr_reader :password
  validates :username, :session_token, :password_digest, precense: true
  validates :username, :session_token, :password_digest, uniqueness: true

  def self.search_by_credentials(username, password)
  end

  def self.generate_session_token
  end

  def password=(password)
  end

  def is_password?(password)
  end

  def ensure_session_token
  end

end
