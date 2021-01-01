Rails.application.routes.draw do
  resources :rewards, :only => [:index, :update]
  resources :events, :only => [:index]
  resources :users, :only => [:create, :update]
  resources :auth, :only => [:create]
end
