json.total_pages @search_results.total_pages

json.search_results @search_results.map(&:searchable) do |search_result|
  json.sender search_result.sender.username
  json.text search_result.text
  json.filename search_result.file_file_name
  json.file_url asset_path(search_result.file.url)
  json.timestamp search_result.created_at
  json.avatar_url asset_path(search_result.sender.avatar.url)
  if search_result.is_a? Message
    json._type "Message"
  else
    json._type "PrivateMessage"
  end

end
