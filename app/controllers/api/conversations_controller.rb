class Api::ConversationsController < Api::ApiController
  def show
    #get all the messages with the other user and order them by date
    sent_pms = current_user
      .sent_private_messages
      .where("receiver_id = ?", params[:id]).includes(:sender)
    received_pms = current_user
      .received_private_messages
      .where("sender_id = ?", params[:id]).includes(:sender)
    @conversation = sent_pms + received_pms
    @conversation.sort_by! { |message| message.created_at }

    #get the other user and if they are starred, the star too
    @other_user = User.find(params[:id])
    @hasStar = current_user.starred_users.include?(@other_user)
    if @hasStar
      @star = Star.find_by(user_id: current_user.id,
            starable_id: @other_user.id,
            starable_type: "User")
    end

    #get the team_site from the session, in case we are reloading the page & don't have a sidebar
    @team_site_id = session[:team_site_id]

    #send the data to backbone
    render :show
  end

end
