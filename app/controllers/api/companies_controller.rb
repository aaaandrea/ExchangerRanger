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

  #private

  # def holding_params
  #   params.require(:companies).permit(:user_id, :company_id)
  # end

end
