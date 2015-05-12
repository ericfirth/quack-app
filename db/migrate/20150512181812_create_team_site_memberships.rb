class CreateTeamSiteMemberships < ActiveRecord::Migration
  def change
    create_table :team_site_memberships do |t|
      t.integer :team_site_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index :team_site_memberships, :team_site_id
    add_index :team_site_memberships, :user_id
  end
end
