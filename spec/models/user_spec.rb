require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'associations' do
    it { should belong_to(:referrer).class_name('User').optional(:true) }
    it { should have_many(:referral_invitations) }
  end
end
