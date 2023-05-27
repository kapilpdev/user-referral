class CreateReferralInvitations < ActiveRecord::Migration[7.0]
  def change
    create_table :referral_invitations do |t|
      t.integer :referred_by
      t.string :email
      t.string :status

      t.timestamps
    end
  end
end
