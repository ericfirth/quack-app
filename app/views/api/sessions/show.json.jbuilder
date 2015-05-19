json.extract! @current_user, :username, :email, :id
json.avatar_url asset_path(@current_user.avatar.url)


# json.starred_messages @starred_messages do |star|
#   json.star_id star.starable_id
#   json.star_type star.starable_type
#   # json.sender star.starable.username
#   json.message star.starable.text
# end


json.starred_sidebar_items @sidebar_items do |sidebar_item|
  json.id sidebar_item.id
  if sidebar_item.is_a?(User)
    json.star_type "User"
    json.title sidebar_item.username
  else
    json.star_type "Channel"
    json.title sidebar_item.title
  end
end
