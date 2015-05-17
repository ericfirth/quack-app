class Message < ActiveRecord::Base
  validates :sender_id, :channel_id, :text, presence: true

  belongs_to :sender,
    class_name: "User",
    foreign_key: :sender_id,
    primary_key: :id
  belongs_to :channel
  has_many :stars, as: :starable

  has_attached_file :file
  validates_attachment :file, size: { in: 0..20.megabytes }
  do_not_validate_attachment_file_type :file

end
