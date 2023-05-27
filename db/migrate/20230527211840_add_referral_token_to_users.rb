# frozen_string_literal: true

class AddReferralTokenToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :referral_token, :string
  end
end
