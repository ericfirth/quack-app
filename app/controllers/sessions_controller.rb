class SessionsController < ApplicationController

  def create
    username = params[:user][:username]
    password = params[:user][:password]
    user = User.find_by_credentials(username, password)
    if user
      login! user
      redirect_to root_url
    else
      flash.now[:errors] = "Incorrect Username/Password combination"
      render :new
    end
  end

  def new
    @user = User.new
    render :new
  end

  def destroy
    sign_out!
    redirect_to new_session_url
  end

end
