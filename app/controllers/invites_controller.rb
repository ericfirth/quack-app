class InvitesController < ApplicationController

  def new
    @invite = Invite.includes(:team_site).find_by(invite_code: params[:invite_code])
    render :new
  end

  def create
    # check if they are a new user & deal with that scenario
    if params[:new_user]
      @user = User.new(invite_params)
      if @user.save
        login! @user
        TeamSiteMembership.create!(team_site_id: params[:team_site_id], user_id: @user.id)

        redirect_to root_url
      else
        flash.now[:errors] = @user.errors.full_messages
        render :new
      end
    # if they are not a new user, deal with that scenario
    else
      # fail
      username = params[:user][:username]
      password = params[:user][:password]
      @user = User.find_by_credentials(username, password)
      if @user
        login! @user
        TeamSiteMembership.create!(team_site_id: params[:team_site_id], user_id: @user.id)
        redirect_to root_url
      else
        flash.now[:errors] = @user.errors.full_messages
        render :new
      end
    end
  end

  def invite_params
    params.require(:user).permit(:username, :email, :password)
  end


end
