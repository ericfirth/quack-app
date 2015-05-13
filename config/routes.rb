Rails.application.routes.draw do
  root to: "static_pages#root"
  resources :users, only: [:create, :new, :destroy,]
  resource :session, only: [:create, :new, :destroy]
  namespace :api, defaults: { format: :json } do
    resources :team_sites
    resource :session, only: [:show]
    resources :channels, except: [:new]
    resources :message, only: [:show]
    resources :team_site_memberships, only: [:create, :destroy]
  end
end
