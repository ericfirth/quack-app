class CreateStars < ActiveRecord::Migration
  def change
    create_table :stars do |t|
      t.integer :user_id, null: false
      t.integer :starable_id, null: false
      t.string :starable_type, null: false

      t.timestamps null: false
    end

    add_index :stars, :used_id
    add_index :stars, :starable_id
  end
end
