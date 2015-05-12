class Api::SessionsController < Api::ApiController

  def show
    @current_user = current_user
    render :show
  end

end
