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
        successful_invite(@user, params[:team_site_id], params[:invite_code])
      else
        flash.now[:errors] = @user.errors.full_messages
        @invite = Invite.includes(:team_site).find_by(invite_code: params[:invite_code])
        render :new
      end
    # if they are not a new user, deal with that scenario
    else
      username = params[:user][:username]
      password = params[:user][:password]
      @user = User.find_by_credentials(username, password)
      if @user
        successful_invite(@user, params[:team_site_id], params[:invite_code])
      else
        flash.now[:errors] = ["Incorrect Email/Password Combination"]
        @invite = Invite.includes(:team_site).find_by(invite_code: params[:invite_code])
        render :new
      end
    end
  end

  def successful_invite(user, team_site_id, invite_code)
    login! user
    TeamSiteMembership.create!(team_site_id: team_site_id, user_id: user.id)
    invite = Invite.find_by(invite_code: invite_code)
    invite.destroy
    redirect_to root_url
  end

  def invite_params
    params.require(:user).permit(:username, :email, :password)
  end


end
