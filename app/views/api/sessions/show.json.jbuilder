json.extract! @current_user, :username, :email, :id
json.avatar_url asset_path(@current_user.avatar.url)


json.starred_messages @starred_messages do |star|
  json.star_id star.starable_id
  json.star_type star.starable_type
end


json.starred_sidebar_items @starred_sidebar_items do |star|
  json.star_id star.starable_id
  json.star_type star.starable_type
end
