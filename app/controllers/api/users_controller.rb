class Api::UsersController < Api::ApiController
  wrap_parameters false

  def update
    @user = current_user
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :avatar)
  end
end
