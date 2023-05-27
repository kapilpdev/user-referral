# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, defaults: { format: :json },
                     controllers: { sessions: 'users/sessions',
                                    registrations: 'users/registrations',
                                    passwords: 'users/passwords' }

  resources :referral_invitations

  get '/health_check', to: proc { [200, {}, ['success']] }

  get 'home/index'
  root 'home#index'
  get '*path', to: 'home#index', via: :all
end
