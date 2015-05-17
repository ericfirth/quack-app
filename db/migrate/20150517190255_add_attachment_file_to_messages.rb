class AddAttachmentFileToMessages < ActiveRecord::Migration
  def self.up
    change_table :messages do |t|
      t.attachment :file
    end
  end

  def self.down
    remove_attachment :messages, :file
  end
end
