class Api::ConversationsController < Api::ApiController

  def show
    
    sent_pms = current_user
      .sent_private_messages
      .where("receiver_id = ?", params[:id]).includes(:sender)

    received_pms = current_user
      .received_private_messages
      .where("sender_id = ?", params[:id]).includes(:sender)

    @conversation = sent_pms + received_pms
    @other_user = User.find(params[:id])


    render :show
  end

end
