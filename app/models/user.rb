# frozen_string_literal: true

# app/models/user.rb
class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :referral_invitations, class_name: 'ReferralInvitation', foreign_key: 'referred_by'
  belongs_to :referrer, class_name: 'User', foreign_key: 'referrer_id', optional: true

  before_create :generate_referral_token
  after_create :update_referral_status

  private

  def generate_referral_token
    self.referral_token = SecureRandom.hex(5)
  end

  def update_referral_status
    ReferralInvitation.where(email: email).update(status: 'accepted')
  end
end
