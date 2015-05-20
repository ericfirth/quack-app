class CreateIndicesOnInvites < ActiveRecord::Migration
  def change
    add_index :invites, :team_site_id
    add_index :invites, :inviter_id
  end
end
