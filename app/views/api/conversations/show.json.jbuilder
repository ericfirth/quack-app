# json.extract! @channel, :id, :title, :team_site_id

json.id @other_user.id
json.other_user @other_user.username
json.team_site_id @team_site_id


json.messages @conversation do |message|
  json.sender message.sender.username
  json.text message.text
  json.timestamp message.created_at
end
