class Api::MessagesController < Api::ApiController
  wrap_parameters false

  def show
    @message = Message.find(params[:id])
    render json: @message
  end

  def create
    @message = current_user.messages.new(message_params)
    @message.file_file_name = params[:message][:file_file_name]
    if @message.save
      render :show
    else
      render json: @message.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @messages = Channel.find(params[:id]).messages.includes(:sender).reverse
    @count = @messages.count
    @messages = Kaminari.paginate_array(@messages).page(params[:page])
    @page = params[:page].to_i
    render :index
  end

  protected

  def message_params
    params.require(:message).permit(:text, :sender_id, :channel_id, :file_file_name, :file)
  end

end
