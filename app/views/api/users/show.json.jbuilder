json.partial! 'user', user: @user
# json.extract! @user, :username, :id
# json.avatar_url asset_path(@user.avatar.url)
json.starred @hasStar
if @hasStar
  json.star_id @star.id
end
json._type "User"
