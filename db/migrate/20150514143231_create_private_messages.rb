class CreatePrivateMessages < ActiveRecord::Migration
  def change
    create_table :private_messages do |t|
      t.integer :sender_id, null: false
      t.integer :receiver_id, null: false
      t.integer :team_site_id, null: false
      t.string :text, null: false

      t.timestamps null: false
    end

    add_index :private_messages, :sender_id
    add_index :private_messages, :receiver_id
    add_index :private_messages, :team_site_id
  end
end
