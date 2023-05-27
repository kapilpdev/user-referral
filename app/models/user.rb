class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :referral_invitations
  belongs_to :referrer, class_name: 'User', foreign_key: 'referred_by'
end
