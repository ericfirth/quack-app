class Api::MessagesController < Api::ApiController

  def show
    @message = Message.find(params[:id])
    render json: @message
  end

  def create
    @message = current_user.messages.new(message_params)

    if @message.save
      render :show
    else
      render json: @message.full_messages, status: :unprocessable_entity
    end
  end

  protected

  def message_params
    params.require(:message).permit(:text, :sender_id, :channel_id)
  end

end
