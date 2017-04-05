Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #others shouldn't be able to create companies; only us
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show, :update, :destroy] #maybe index too for leaderboard
    resource :session, only: [:create, :destroy]
    resources :companies
    resources :holdings
  end
end
