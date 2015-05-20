class User < ActiveRecord::Base
  EMAIL_REGEX = /^([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})$/i

  validates :username, :session_token, :password_digest, :email, presence: true
  validates :username, :session_token, :password_digest, :email, uniqueness: true
  validates :password, length: { minimum: 7, allow_nil: true }
  validates :username, length: { maximum: 30 }
  validates_format_of :email, with: EMAIL_REGEX, multiline: true

  after_initialize :ensure_session_token

  attr_reader :password

  has_many :owned_team_sites,
    class_name: "TeamSite",
    foreign_key: :owner_id,
    primary_key: :id
  has_many :team_site_memberships, dependent: :destroy, inverse_of: :user
  has_many :team_sites, through: :team_site_memberships, source: :team_site
  has_many :messages,
    class_name: "Message",
    foreign_key: :sender_id,
    primary_key: :id,
    dependent: :destroy
  has_many :sent_private_messages,
    class_name: "PrivateMessage",
    foreign_key: :sender_id,
    primary_key: :id,
    dependent: :destroy
  has_many :received_private_messages,
    class_name: "PrivateMessage",
    foreign_key: :receiver_id,
    primary_key: :id,
    dependent: :destroy
  has_many :stars, dependent: :destroy
  has_many :received_stars, as: :starable
  has_many :starred_channels, through: :stars, source: :starable, source_type: "Channel"
  has_many :starred_users, through: :stars, source: :starable, source_type: "User"
  has_many :starred_messages, through: :stars, source: :starable, source_type: "Message"
  has_many :starred_private_messages, through: :stars, source: :starable, source_type: "PrivateMessage"


  has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "50x50>" }, default_url: "missing-person.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  def self.find_or_create_by_auth_hash(auth_hash)
    credential = Credential.find_by(
              provider: auth_hash[:provider],
              uid: auth_hash[:uid])
    if credential
      user = User.find(credential.user_id)
    end

    unless user
      username = auth_hash[:info][:name].gsub(" ", "_")
      user = User.create!(
            username: username,
            password: SecureRandom::urlsafe_base64,
            email: auth_hash[:info][:email])
      Credential.create!(uid: auth_hash[:uid],
              provider: auth_hash[:provider],
              user_id: user.id)
    end

    user
  end

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
