Rails.application.routes.draw do
  resources :rewards
  resources :events
  resources :users
  resources :auth
end
