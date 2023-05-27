# frozen_string_literal: true

# app/models/referral_invitation.rb
class ReferralInvitation < ApplicationRecord
  enum status: {
    pending: 'pending',
    accepted: 'accepted'
  }, _default: 'pending'

  validates :email, presence: true, uniqueness: true
end
