# frozen_string_literal: true

# app/models/user.rb
class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :referral_invitations, class_name: 'ReferralInvitation', foreign_key: 'referred_by'
  belongs_to :referrer, class_name: 'User', foreign_key: 'referrer_id', optional: true
end
