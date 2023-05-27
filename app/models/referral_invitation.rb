# frozen_string_literal: true

# app/models/referral_invitation.rb
class ReferralInvitation < ApplicationRecord
  enum status: {
    pending: 'pending',
    accepted: 'accepted'
  }, _default: 'pending'

  belongs_to :referrer, class_name: 'User', foreign_key: 'referred_by'

  validates :email, presence: true, uniqueness: true
  after_create :send_invitation

  private

  def send_invitation
    ReferralInvitationMailer.invitation_mail(id).deliver_now
  end
end
