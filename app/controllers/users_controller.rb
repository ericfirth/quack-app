class UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login! @user
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
  end

  def new
    @user = User.new(user_params)
    render :new
  end

  private

  def user_params
    params.require(:user).permit(:password, :username)
  end

end
