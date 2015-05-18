class Api::SessionsController < Api::ApiController

  def show
    @current_user = current_user
    @starred_sidebar_items, @starred_messages = [], []
    current_user.stars.each do |star|
      if star.starable_type == "Message" || star.starable_type == "PrivateMessage"
        @starred_messages << star
      else
        @starred_sidebar_items << star
      end
    end
    
    render :show
  end

end
