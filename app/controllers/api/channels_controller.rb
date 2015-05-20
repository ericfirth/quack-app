class Api::ChannelsController < Api::ApiController
  def show
    @channel = Channel.includes(messages: :sender).find(params[:id])
    @hasStar = current_user.starred_channels.include?(@channel)
    @star = Star.find_by(user_id: current_user.id, starable_id: @channel.id, starable_type: "Channel")
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
