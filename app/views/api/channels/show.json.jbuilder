json.extract! @channel, :id, :title, :team_site_id

json.messages @channel.messages do |message|
  json.sender message.sender.username
  json.text message.text
  json.timestamp message.created_at
end