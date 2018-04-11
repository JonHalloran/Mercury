Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, format: :json do
    resources :users, only: %i(create edit show index)
    resource :session, only: %i(create destroy)
    resources :routes, only: %i(create index show)
    resources :runs, only: %i(index show create) do
      resources :comments, only: %i(index create)
    end
  end

  root "static_pages#root"
end
