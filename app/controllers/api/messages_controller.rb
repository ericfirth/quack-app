class Api::MessagesController < Api::ApiController

  def show
    @message = Message.find(params[:id])
    render json: @message
  end

  def create
    @message = current_channel.messages.new(message_params)
    @message.sender_id = current_user.id

    if @message.save
      render json: @message
    else
      render json: @message.full_messages, status: :unprocessable_entity
    end
  end



end
