Rails.application.routes.draw do
  root to: "api/team_sites#index"
  resources :users, only: [:create, :new, :destroy, :show]
  resource :session, only: [:create, :new, :destroy]
  # namespace :api do
  # end
end
