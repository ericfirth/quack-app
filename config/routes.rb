Rails.application.routes.draw do
  root to: "static_pages#root"
  resources :users, only: [:create, :new, :destroy,]
  resource :session, only: [:create, :new, :destroy]
  resources :invites, only: [:new, :create]
  namespace :api, defaults: { format: :json } do
    resources :channels, except: [:new]
    resources :conversations, except: [:new, :update]
    resources :messages, only: [:show, :create]
    resources :private_messages, only: [:show, :create]
    resource :session, only: [:show, :update]
    resources :invites, only: [:create]
    resources :stars, only: [:create, :destroy]
    resources :team_site_memberships, only: [:create, :destroy]
    resources :team_sites
    resources :users, only: [:update, :show]
  end
end
