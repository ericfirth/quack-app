json.team_site_id @team_site_id
json.id @other_user.id
json.other_user @other_user.username

# json.other_user do
#   json.extract! @other_user, :username, :id
#   json.avatar_url asset_path(@other_user.avatar.url)
#   json.starred @hasStar
#   if @hasStar
#     json.star_id @star.id
#   end
#   json._type "User"
# end

json.messages @conversation do |message|
  json.sender message.sender.username
  json.text message.text
  json.filename message.file_file_name
  json.file_url asset_path(message.file.url)
  json.timestamp message.created_at
  json.avatar_url asset_path(message.sender.avatar.url)
end
