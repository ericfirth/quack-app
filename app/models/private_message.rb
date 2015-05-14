class PrivateMessage < ActiveRecord::Base
  validates :sender_id, :receiver_id, :team_site_id, :text, presence: true

  belongs_to :team_site
  belongs_to :sender,
    class_name: "User",
    foreign_key: :sender_id,
    primary_key: :id

  belongs_to :receiver,
    class_name: "User",
    foreign_key: :receiver_id,
    primary_key: :id


end
