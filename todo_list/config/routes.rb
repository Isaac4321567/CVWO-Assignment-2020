Rails.application.routes.draw do
  resources :tasks  
  get 'tasks/destroy', to: 'tasks#index'
  root 'tasks#index'

  get 'tags/:tag', to: 'tasks#index', as: :tag
end
