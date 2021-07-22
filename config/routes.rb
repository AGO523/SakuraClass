Rails.application.routes.draw do
  # mount_devise_token_auth_for 'User', at: 'auth'
  namespace :api do
    namespace :v1 do
      resources :rooms
      resources :informations
      resources :posts
      resources :login
      resources :resistrations
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        resistrations: 'api/v1/auth/resistrations'
      }
    end
  end
end
