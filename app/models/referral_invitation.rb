class ReferralInvitation < ApplicationRecord
  enum status: {
    pending: "pending",
    accepted: "accepted"
  }
end
