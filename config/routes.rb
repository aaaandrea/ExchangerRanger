Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #others shouldn't be able to create companies; only us
  namespace :api, defaults: {format: :json} do
    resources :users, only: [
      :new,
      :create,
      :edit,
      :update,
      :index,
      :show,
      :destroy
    ] #maybe index too for leaderboard
    #user update and destroy removed until utilized in controller
    resource :session, only: [
      :new,
      :create,
      :destroy
    ]
    resources :companies, only: [
      :show,
      :index
    ]
    resources :holdings, only: [
      :create,
      :update,
      :show
    ]
  end
end
