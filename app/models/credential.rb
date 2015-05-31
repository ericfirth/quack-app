class Credential < ActiveRecord::Base
  validates :uid, :user_id, :provider, presence: true
  validates :uid, uniqueness: { scope: :provider, message: "Each user can only have one account with that provider" }
  belongs_to :user
end
