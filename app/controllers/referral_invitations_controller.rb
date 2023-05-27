# frozen_string_literal: true

# app/controllers/referral_invitations_controller.rb
class ReferralInvitationsController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :authorize_request

  def index
    referral_invitations = current_user.referral_invitations
    render json: referral_invitations.as_json, status: :ok
  end

  def create
    user_referral = current_user.referral_invitations.create(referral_params)
    render json: user_referral.as_json, status: :ok if user_referral
  end

  private

  def referral_params
    params.require(:referral_invitation).permit(:email)
  end
end
