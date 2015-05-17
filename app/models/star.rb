class Star < ActiveRecord::Base

  belongs_to :starable, polymorphic: true
  belongs_to :user
end
