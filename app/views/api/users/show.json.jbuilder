json.extract! @user, :username, :email, :id
json.avatar_url asset_path(@user.avatar.url)
