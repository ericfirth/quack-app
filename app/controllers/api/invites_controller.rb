class Api::InvitesController < Api::ApiController

  def create
    @invite = Invite.new(invite_params)
    @invite.inviter_id = current_user.id
    if @invite.save
      domain = request.domain
      mail = UserMailer.invitation_email(@invite, domain)
      mail.deliver
      render json: @invite
    else
      render json: @invite.errors.full_messages
    end
  end

  def invite_params
    params.require(:invite).permit(:invite_code, :team_site_id, :email)
  end

end
