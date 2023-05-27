# frozen_string_literal: true

# app/mailers/referral_invitation_mailer.rb
class ReferralInvitationMailer < ApplicationMailer
  def invitation_mail(referral_id)
    @referral = ReferralInvitation.find(referral_id)
    @referrer = @referral.referrer
    mail(to: @referral.email, subject: "#{@referrer.email} invited you to join User Referrals!")
  end
end
