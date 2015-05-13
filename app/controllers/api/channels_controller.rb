class Api::ChannelsController < Api::ApiController
  def show
    @channel = Channel.find(params[:id])
    render json: @channel
  end
end
