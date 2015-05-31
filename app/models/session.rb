class Session < ActiveRecord::Base
  validates :user_id, :token, presence: true

  belongs_to :user

  after_initialize :ensure_unique_token


  def self.find_user(session_token)
    session = Session.find_by(token: session_token)
    session.nil? ? nil : session.user
  end


  def ensure_unique_token
    token = SecureRandom.urlsafe_base64(16)

    until !Session.exists?(token: token)
      token = SecureRandom.urlsafe_base64(16)
    end

    self.token = token
  end


end
