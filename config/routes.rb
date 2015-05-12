Rails.application.routes.draw do
  root to: "static_pages#root"
  resources :users, only: [:create, :new, :destroy, :show]
  resource :session, only: [:create, :new, :destroy]
  # namespace :api do
  # end
end
