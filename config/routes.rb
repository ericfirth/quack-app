Rails.application.routes.draw do
  root to: "static_pages#root"
  resources :users, only: [:create, :new, :destroy,]
  resource :session, only: [:create, :new, :destroy]
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:update]
    resources :team_sites
    resources :users, only: [:update]
    resource :session, only: [:show]
    resources :channels, except: [:new]
    resources :conversations, except: [:new, :update]
    resources :messages, only: [:show, :create]
    resources :private_messages, only: [:show, :create]
    resources :team_site_memberships, only: [:create, :destroy]
  end
end
