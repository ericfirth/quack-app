class ChangeStars < ActiveRecord::Migration
  def change
    add_column :stars, :user_id, :integer, null: false
    add_column :stars, :starable_id, :integer, null: false
    add_column :stars, :starable_type, :string, null: false
    add_index :stars, :user_id
    add_index :stars, :starable_id


  end
end
