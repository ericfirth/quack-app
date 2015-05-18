# t.datetime "created_at",    null: false
# t.datetime "updated_at",    null: false
# t.integer  "user_id",       null: false
# t.integer  "starable_id",   null: false
# t.string   "starable_type", null: false

class Star < ActiveRecord::Base
  validates :user_id, :starable_id, :starable_type, presence: true
  validates :user_id, uniqueness: { scope: [:starable_id, :starable_type], message: "Only a single star per item"}

  belongs_to :starable, polymorphic: true
  belongs_to :user
end
