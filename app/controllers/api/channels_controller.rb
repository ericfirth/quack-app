class Api::ChannelsController < Api::ApiController
  def show
    @channel = Channel.includes(messages: :sender).find(params[:id])
    render :show
  end
end
