# frozen_string_literal: true

module Users
  # app/controllers/users/registrations_controller.rb
  class RegistrationsController < Devise::RegistrationsController
    before_action :authorize_request, except: :create
    before_action :set_referrer
    protect_from_forgery with: :null_session

    def create
      user = User.new(sign_up_params)
      user.referrer = @referrer
      token = JsonWebToken.encode(user_id: user.id)
      if user.save
        render json: { id: user.id, email: user.email,
                       token: token, message: 'Registration Successful!' }, status: :ok
      else
        render json: { errors: user.errors.full_messages, status: :unprocessable_entity }
      end
    end

    private

    def set_referrer
      @referrer = User.find_by(referral_token: params[:referral_token]) if params[:referral_token]
    end

    def sign_up_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end
  end
end
