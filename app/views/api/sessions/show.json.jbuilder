json.extract! @current_user, :username, :email, :id
json.avatar_url asset_path(@current_user.avatar.url)

if @current_team_site
  # json.sidebar do
    # json.starred_sidebar_items @sidebar_stars do |sidebar_item|
    #   json.id sidebar_item.id
    #   if sidebar_item.is_a?(User)
    #     json.star_type "User"
    #     json.title sidebar_item.username
    #   else
    #     json.star_type "Channel"
    #     json.title sidebar_item.title
    #   end
    # end
  json.channels @current_team_site.channels do |channel|
    json.id "channel#{channel.id}"
    json.original_id channel.id
    json.title channel.title
    json.team_site_id channel.team_site_id
    if @sidebar_stars.include?(channel)
      json.starred true
    else
      json.starred false
    end
    json._type "Channel"
  end

  json.users do
    json.array!(@current_team_site.users) do |user|
      if user != @current_user
        json.username user.username
        json.id "user#{user.id}"
        json.original_id user.id
    
        json.avatar_url asset_path(user.avatar.url)
        if @sidebar_stars.include?(user)
          json.starred true
        else
          json.starred false
        end
        json._type "User"
      end
    end
  end


end

if session[:channel_id]
  json.channel_to_display session[:channel_id]
else
  json.channel_to_display @current_team_site.channels.to_a.sample.id
end
