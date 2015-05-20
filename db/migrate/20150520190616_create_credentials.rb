class CreateCredentials < ActiveRecord::Migration
  def change
    create_table :credentials do |t|
      t.integer :user_id, null: false
      t.string :uid, null: false
      t.string :provider, null: false

      t.timestamps null: false
    end

    add_index :credentials, [:uid, :provider], unique: true
    add_index :credentials, :user_id 
  end
end
