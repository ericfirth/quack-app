class AddAttachmentFileToPrivatemessages < ActiveRecord::Migration
  def self.up
    change_table :private_messages do |t|
      t.attachment :file
    end
  end

  def self.down
    remove_attachment :private_messages, :file
  end
end
