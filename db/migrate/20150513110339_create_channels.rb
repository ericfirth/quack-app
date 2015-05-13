class CreateChannels < ActiveRecord::Migration
  def change
    create_table :channels do |t|
      t.integer :team_site_id, null: false
      t.string :title, null: false

      t.timestamps null: false
    end

    add_index :channels, :team_site_id
  end
end
