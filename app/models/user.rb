class User < ActiveRecord::Base
  EMAIL_REGEX = /^([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})$/i

  validates :username, :session_token, :password_digest, :email, presence: true
  validates :username, :session_token, :password_digest, :email, uniqueness: true
  validates :password, length: { minimum: 7, allow_nil: true }
  validates_format_of :email, with: EMAIL_REGEX, multiline: true

  after_initialize :ensure_session_token

  attr_reader :password

  has_many :owned_team_sites,
    class_name: "TeamSite",
    foreign_key: :owner_id,
    primary_key: :id
  has_many :team_site_memberships, dependent: :destroy, inverse_of: :user
  has_many :team_sites, through: :team_site_memberships, source: :team_site



  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return nil if @user.nil?
    @user.is_password?(password) ? @user : nil
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
