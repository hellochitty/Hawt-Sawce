Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    match 'users/:id' => 'users#find_by_id', :via => :get
    match 'users/:id' => 'users#update', :via => :patch
    resource :session, only: [:create, :destroy, :show]
    resources :sauces, only: [:index, :show, :create, :update, :destroy]
    match 'sauces/order/:id' => 'sauces#order', :via => :get
    resources :sauce_companies, only: [:index]
    resources :checkins, only: [:index, :show, :destroy, :create]
    resources :comments, only: [:create, :destroy]
    get '/search', to: 'searches#search'
  end
end
