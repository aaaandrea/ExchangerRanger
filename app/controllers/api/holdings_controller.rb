class Api::HoldingsController < ApplicationController

  def create
    @holding = Holding.find_or_create_by(holding_params)
    render "api/holdings/show"
    # if @holding.save
    #   render "api/holdings/show"
    # else
    #   render json: @holding.errors.full_messages, status: 422
    # end
  end

  def update
    @holding = Holding.find(params[:holding][:id])
    puts params[:holding][:amount]
    @holding.trade(params[:holding][:amount].to_i)
    # if @holding.update(params[:amount])
    #   render "api/holdings/show"
    # else
    #   render json: @holding.errors.full_messages, status: 422
    # end
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
    params.require(:holding).permit(:user_id, :company_id, :amount)
  end

end
