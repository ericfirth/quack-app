class TeamSite < ActiveRecord::Base
  validates :owner_id, :name, presence: true
  validates :name, uniqueness: true

  belongs_to :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id
  has_many :team_site_memberships, dependent: :destroy, inverse_of: :team_site
  has_many :users, through: :team_site_memberships, source: :user
  has_many :channels

end
