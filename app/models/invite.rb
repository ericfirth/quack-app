# t.string :invite_code, null: false
# t.integer :team_site_id, null: false
# t.string :email, null: false
# t.integer :inviter_id, null: false
#
# t.timestamps null: false
class Invite < ActiveRecord::Base
  validates :invite_code, :team_site_id, :email, :inviter_id, presence: true
  after_initialize :ensure_invite_code

  belongs_to :team_site

  def ensure_invite_code
    self.invite_code ||= SecureRandom.urlsafe_base64(16)
  end

end
