class Api::ChannelsController < Api::ApiController

  def show
    @message = Message.find(params[:id])
    render json: @message
  end

end
