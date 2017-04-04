class Api::UsersController < ApplicationController
  def create
  @user = User.new(user_params)

  if @user.save
    login(@user)
    # check routes
    render "api/users/show"
  else
    # check reactnative errors messages
    render json: @user.errors.full_messages, status: 422
  end
end

def show
end

private

def user_params
  params.require(:user).permit(:username, :password)
end
end
