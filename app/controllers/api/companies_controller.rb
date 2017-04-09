class Api::CompaniesController < ApplicationController
  #no need for create. Companies should only be created in seeds.rb
  def show
    @company = Company.find(params[:id])
    if @company
      render "api/companies/show"
    else
      render json: @company.errors.full_messages, status: 422
    end
  end

  def index
    @companies = Company.all
    render "api/companies/index"
  end

  def update
    @company = Company.find(params[:id])
    @company.update_price
    #below lines may be unnecessary
    # if @company.update(params[:share_price])
    #   #do something maybe
    # else
    #   render json: @company.errors.full_messages, status: 422
    # end
  end

  #private

  # def holding_params
  #   params.require(:companies).permit(:user_id, :company_id)
  # end

end
