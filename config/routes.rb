Rails.application.routes.draw do

  devise_for :users, only: []

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :users, only: [:create, :index]
      resource :login, only: [:create], controller: :sessions
      resources :words, only: [:index, :create] do
        get 'popular_words', on: :collection
      end
      resources :word_bank_entry, only: [:index, :create]
    end
  end

end
