class Api::StarsController < Api::ApiController

  def create
    @star = Star.new(star_params)
    if @star.save
      render json: @star
    else
      render json: @star.errors.full_messages
    end
  end


  def destroy
    @star = Star.find(params[:id])
    @star.destroy
    render json: @star
  end

  private
  def star_params
    params.require(:star).permit(:starable_type, :starable_id, :user_id)
  end

end
