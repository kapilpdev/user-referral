# frozen_string_literal: true

# app/controllers/referral_invitations_controller.rb
class ReferralInvitationsController < ApplicationController
  before_action :authorize_request

  def index
    referral_invitations = current_user.referral_invitations
    render json: referral_invitations.as_json, status: :ok
  end

  def create
    user_referral = ReferralInvitation.new(referral_params)
    user_referral.referred_by
  end

  private

  def referral_params
    params.require(:referral_invitations).permit(:email)
  end
end
