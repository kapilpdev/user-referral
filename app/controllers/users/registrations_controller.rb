# frozen_string_literal: true

# app/controllers/users/registrations_controller.rb
class Users::RegistrationsController < Devise::RegistrationsController
  before_action :authorize_request, except: :create
  protect_from_forgery with: :null_session

  def create
    user = User.new(sign_up_params)
    token = JsonWebToken.encode(user_id: user.id)
    if user.save
      render json: { id: user.id , email: user.email,
                     token: token, message: 'Registration Successful!' }, status: :ok
    else
      render json: { errors: user.errors.full_messages, status: :unprocessable_entity }
    end
  end

  private

  def sign_up_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end