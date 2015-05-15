class Api::ConversationsController < Api::ApiController

  def show

    sent_pms = current_user
      .sent_private_messages
      .where("receiver_id = ?", params[:id]).includes(:sender)

    received_pms = current_user
      .received_private_messages
      .where("sender_id = ?", params[:id]).includes(:sender)

    @conversation = sent_pms + received_pms
    @conversation.sort_by! { |message| message.created_at }
    @other_user = User.find(params[:id])
    @team_site_id = session[:team_site_id]


    render :show
  end

end
