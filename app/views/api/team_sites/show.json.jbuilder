json.extract! @team_site, :id, :name, :owner_id

json.users do
  json.array!(@team_site.users) do |user|
    json.extract! user, :username, :id
    json.avatar_url asset_path(user.avatar.url)
    if @stars.include?(user)
      json.starred "true"
    end
  end
end

json.channels @team_site.channels do |channel|
  json.title channel.title
  json.id channel.id
  if @stars.include?(channel)
    json.starred "true"
  end
end

if session[:channel_id]
  json.channel_to_display session[:channel_id]
else
  json.channel_to_display @team_site.channels.to_a.sample.id
end
