class Api::ChannelsController < Api::ApiController
  def show
    @channel = Channel.includes(messages: :sender).find(params[:id])
    session[:channel_id] = @channel.id
    render :show
  end

  def create
    team_site = TeamSite.find(session[:team_site_id])
    @channel = team_site.channels.new(channel_params)

    if @channel.save
      render json: @channel
    else
      render json: @channel.errors.full_messages
    end
  end

  protected
  def channel_params
    params.require(:channel).permit(:title)
  end
end
