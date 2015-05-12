class Api::TeamSitesController < Api::ApiController
  def index
    @team_sites = current_user.team_sites
    render json: @team_sites
  end

end
