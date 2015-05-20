class UserMailer < ApplicationMailer

  def invitation_email(invite, domain)
    @invite = invite
    @team_site = TeamSite.find(invite.team_site_id)
    @inviter = User.find(invite.inviter_id)

    if Rails.env == "development"
      domain = "localhost:3000"
    else
      domain = "quack-app.herokuapp.com"
    end

    @url = "http://#{domain}/invites/new/?invite_code=#{invite.invite_code}"
    mail(from: "#{@inviter.username.capitalize} <#{@inviter.email}>",
        to: @invite.email,
        subject: "You've been invited to a Quack group!")
  end

end
