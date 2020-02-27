Rails.application.routes.draw do
  resources :tasks  
  
  root 'tasks#index'

  get 'tags/:tag', to: 'tasks#index', as: :tag
end
