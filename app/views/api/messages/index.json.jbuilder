json.page @page
json.total_messages @count
json.total_pages @messages.total_pages


json.messages @messages do |message|
  json.sender message.sender.username
  json.text message.text
  json.filename message.file_file_name
  json.filetype message.file_content_type
  json.file_url asset_path(message.file.url)
  json.timestamp message.created_at
  json.avatar_url asset_path(message.sender.avatar.url)
end
