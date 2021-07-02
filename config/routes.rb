Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :rooms
      resources :informations
      resources :posts
    end
  end
end
