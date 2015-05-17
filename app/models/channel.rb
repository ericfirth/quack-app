class Channel < ActiveRecord::Base
  validates :team_site_id, :title, presence: true

  belongs_to :team_site
  has_many :messages
  has_many :stars, as: :starable
end
