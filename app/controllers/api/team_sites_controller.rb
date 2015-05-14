class Api::TeamSitesController < Api::ApiController
  def index
    @team_sites = current_user.team_sites
    render json: @team_sites
  end

  def create
    @team_site = current_user.owned_team_sites.new(team_site_params)


    if @team_site.save
      TeamSiteMembership.create(user_id: current_user.id, team_site_id: @team_site.id)
      render json: @team_site
    else
      render json: @team_site.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    session[:team_site_id] = params[:id]
    @team_site = TeamSite.includes(:users, :channels).find(params[:id])
    render :show
  end

  private

  def team_site_params
    params.require(:team_site).permit(:owner_id, :name)
  end

end
