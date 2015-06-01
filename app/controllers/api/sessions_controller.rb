class Api::SessionsController < Api::ApiController

  def show
    @current_user = current_user
    if session[:team_site_id]
      @sidebar_stars = @current_user.starred_channels + @current_user.starred_users
      @current_team_site = current_team_site
    end
    render :show
  end

  def update

    @current_user = current_user
    if session[:team_site_id]
      @current_team_site = current_team_site
    end
    @sidebar_stars = @current_user.starred_channels + @current_user.starred_users
    if @current_user.update(session_params)
      render :show
    end
  end

  def session_params
    params.require(:session).permit(:avatar, :team_site_id, :email)
  end


end
