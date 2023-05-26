Rails.application.routes.draw do
  get 'home/index'
  devise_for :users, defaults: { format: :json },
                     controllers: { sessions: 'users/sessions',
                                    registrations: 'users/registrations',
                                    passwords: 'users/passwords'
                                  }

  get '/health_check', to: proc { [200, {}, ['success']] }
  root 'home#index'
  get '*path', to: 'home#index', via: :all
end
