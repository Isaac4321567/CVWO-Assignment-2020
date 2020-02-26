Rails.application.routes.draw do
  post '/tasks', to: 'tasks#index'  
  resources :tasks, :only => [:index, :new]

  root 'tasks#index'
end
