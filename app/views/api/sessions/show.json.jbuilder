json.extract! @current_user, :username, :email, :id
json.avatar_url asset_path(@current_user.avatar.url)

if @current_team_site
  json.sidebar do
    json.starred_sidebar_items @sidebar_stars do |sidebar_item|
      json.id sidebar_item.id
      if sidebar_item.is_a?(User)
        json.star_type "User"
        json.title sidebar_item.username
      else
        json.star_type "Channel"
        json.title sidebar_item.title
      end
    end

    json.users do
      json.array!(@current_team_site.users) do |user|
        if !@sidebar_stars.include?(user) && user != @current_user
          json.extract! user, :username, :id
          json.avatar_url asset_path(user.avatar.url)
        end
      end
    end

    json.channels @current_team_site.channels do |channel|
      if !@sidebar_stars.include?(channel)
        json.title channel.title
        json.id channel.id
      end
    end

  end

  if session[:channel_id]
    json.channel_to_display session[:channel_id]
  else
    json.channel_to_display @current_team_site.channels.to_a.sample.id
  end
end
