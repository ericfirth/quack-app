class TeamSiteMembership < ActiveRecord::Base
  belongs_to :team_site, inverse_of: :team_site_memberships
  belongs_to :user, inverse_of: :team_site_memberships
end
