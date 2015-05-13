class Message < ActiveRecord::Base
  validates :sender_id, :channel_id, :text, presence: true

  belongs_to :sender,
    class_name: "User",
    foreign_key: :sender_id,
    primary_key: :id
  belongs_to :channel

end
