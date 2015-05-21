class PrivateMessage < ActiveRecord::Base
  include PgSearch
  multisearchable :against => [:text]
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

  has_many :stars, as: :starable

  has_attached_file :file
  validates_attachment :file, size: { in: 0..20.megabytes }
  do_not_validate_attachment_file_type :file


end
