json.extract! channel, :id, :title, :team_site_id

json.messages @channel.messages do |message|
  json.sender message.sender.username
  json.text message.text
  json.filename message.file_file_name
  json.file_url asset_path(message.file.url)
  json.timestamp message.created_at
  json.avatar_url asset_path(message.sender.avatar.url)
end
