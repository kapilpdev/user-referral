# frozen_string_literal: true

module Users
  class SessionsController < Devise::SessionsController
    before_action :authorize_request, except: :create
    protect_from_forgery with: :null_session

    def create
      user = User.find_by_email(params[:user][:email])
      if user&.valid_password?(params[:user][:password])
        token = JsonWebToken.encode(user_id: user.id)
        render json: {
          token: token, exp: 1.day.from_now,
          id: user.id, email: user.email
        }, status: :ok
      else
        render json: { error: 'unauthorized' }, status: :unauthorized
      end
    end
  end
end
