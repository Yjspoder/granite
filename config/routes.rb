Rails.application.routes.draw do
  resources :tasks
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create]
  delete "/logout" => "sessions#destroy"
end
