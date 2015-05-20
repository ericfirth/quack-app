class UserMailer < ApplicationMailer

  def invitation_email(user)
    @user = user
    @url = "http://quack-app.herokuapp.com/session/new"
    @current_user = User.find(2)
    mail(from: "#{@current_user.username.capitalize} <#{@current_user.email}>",
        to: @user.email,
        subject: "You've been invited to a Quack group!")
  end

end
