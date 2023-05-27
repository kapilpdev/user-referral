class AddUserToReferralInvitations < ActiveRecord::Migration[7.0]
  def change
    add_reference :referral_invitations, :user, null: false, foreign_key: true
  end
end
