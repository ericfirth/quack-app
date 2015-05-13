class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.integer :sender_id, null: false
      t.integer :channel_id, null: false
      t.string :text, null: false

      t.timestamps null: false
    end

    add_index :messages, :sender_id
    add_index :messages, :channel_id
  end
end
