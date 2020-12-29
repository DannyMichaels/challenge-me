Rails.application.routes.draw do
  resources :likes
  get '/contests/oldest', to: 'contests#last_2'
  get '/contests/newest', to: 'contests#first_2'
  resources :contests
  resources :submissions
  resources :votes
  resources :users, :only => [:create, :index, :show, :update]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

end
