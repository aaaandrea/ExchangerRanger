class Api::HoldingsController < ApplicationController

  def create
    @holding = Holding.new(holding_params)
    if @holding.save
      #do something maybe
    else
      render json: @holding.errors.full_messages, status: 422
    end
  end

  def update
    @holding = Holding.find(params[:id])
    if @holding.update(params[:amount])
      #do something maybe
    else
      render json: @holding.errors.full_messages, status: 422
    end
  end

  def show
    @holding = Holding.find(params[:id])
    if @holding
      render "api/holdings/show"
    else
      render json: @holding.errors.full_messages, status: 422
    end
  end

  #destroy would mostly be to save a little space, i think its unnecessary

  private

  def holding_params
    params.require(:holdings).permit(:user_id, :company_id)
  end

end
