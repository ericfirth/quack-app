class CreateTeamSites < ActiveRecord::Migration
  def change
    create_table :team_sites do |t|
      t.integer :owner_id, null: false
      t.string :name, null: false

      t.timestamps null: false
    end

    add_index :team_sites, :owner_id
    add_index :team_sites, :name, unique: true
  end
end
