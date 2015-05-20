class CreateInvites < ActiveRecord::Migration
  def change
    create_table :invites do |t|
      t.string :invite_code, null: false
      t.integer :team_site_id, null: false
      t.string :email, null: false
      t.integer :inviter_id, null: false

      t.timestamps null: false
    end
  end
end
