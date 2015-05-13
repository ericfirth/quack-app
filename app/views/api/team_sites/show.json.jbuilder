json.extract! @team_site, :id, :name, :owner_id

json.users do
  json.array!(@team_site.users) do |user|
    json.extract! user, :username, :id
  end
end

json.channels @team_site.channels do |channel|
  json.title channel.title
  json.id channel.id
end
