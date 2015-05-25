class SessionsController < ApplicationController

  def create
    username = params[:user][:username]
    password = params[:user][:password]
    user = User.find_by_credentials(username, password)
    if user
      login! user
      redirect_to root_url
    else
      flash.now[:errors] = ["Incorrect Username/Password combination"]
      render :new
    end
  end

  def new
    @user = User.new
    render :new
  end

  def destroy
    sign_out!
    session[:team_site_id] = nil
    redirect_to new_session_url
  end

  def guest
    user = User.find(1)
    login! user
    redirect_to root_url
  end

  def omniauth
    user = User.find_or_create_by_auth_hash(auth_hash)
    successful_invite(user) if session[:invite_code]
    login! user
    redirect_to root_url
  end

  def auth_hash
    request.env['omniauth.auth']
  end

end
