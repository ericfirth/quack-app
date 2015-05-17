class Api::PrivateMessagesController < Api::ApiController
  def create
    @message = current_user.sent_private_messages.new(private_message_params)

    if @message.save
      render :show
    else
      render json: @message.full_messages, status: :unprocessable_entity
    end
  end

  def private_message_params
    params.require(:private_message).permit(:team_site_id, :receiver_id, :text, :file)
  end
end
