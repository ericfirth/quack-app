class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :signed_in?

  private
  def current_user
    @current_user ||= User.includes(:starred_channels, :starred_users).find_by(session_token: session[:session_token])
  end

  def current_team_site
    @current_team_site ||= TeamSite.includes(:users, channels: :messages).find(session[:team_site_id])
  end

  def push_message(message)
    Pusher.trigger('messages', 'new_message', jbuilder_pusher_message(message))
  end

  def jbuilder_pusher_message(message)
    JbuilderTemplate.new(message).tap do |json|
      json.sender message.sender.username
      json.text message.text
      json.filename message.file_file_name
      json.file_url ActionController::Base.helpers.asset_path(message.file.url)
      json.timestamp message.created_at
      json.avatar_url ActionController::Base.helpers.asset_path(message.sender.avatar.url)
    end.to_json
  end

  def login!(user)
    session[:session_token] = user.reset_token!
  end

  def successful_invite(user)
    TeamSiteMembership.create!(team_site_id: session[:team_site_id], user_id: user.id)
    invite = Invite.find_by(invite_code: session[:invite_code])
    invite.destroy
    session[:team_site_id], session[:invite_code] = nil, nil
  end

  def join_team_site
    session[:team_site_id] = params[:id]
  end

  def signed_in?
    !!current_user
  end

  def sign_out!
    current_user.reset_token!
    session[:session_token] = nil
    session[:team_site_id] = nil
  end

  def require_sign_in!
    redirect_to new_session_url unless signed_in?
  end

end
