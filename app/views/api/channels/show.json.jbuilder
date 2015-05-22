json.extract! @channel, :id, :title, :team_site_id
json.starred @hasStar
if @hasStar
  json.star_id @star.id
end
json._type "Channel"
