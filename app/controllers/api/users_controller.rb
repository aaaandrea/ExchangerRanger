require 'json'

class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      # check routes
      render "api/users/show"
    else
      # check reac tnative errors messages
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
    render "api/users/index"
  end

  #skipping #update and #destroy for now
  #destroy will delete account. update will change username and/or password

  private

  def user_params
    # params = JSON.parse('params')
    params.require(:user).permit(:username, :password)
  end
end
