class Api::SessionsController < Api::ApiController

  def show
    @current_user = current_user
    @sidebar_items = @current_user.starred_channels + @current_user.starred_users
    render :show
  end

  # def starred_users
  #   Users.find_by_sql(<<-SQL, current_user.id)
  #   SELECT
  #     starred_user.id AS star_id, user_stars.starable_type AS star_type, starred_user.username AS username
  #   FROM
  #     users AS our_user
  #   JOIN
  #     stars AS user_stars ON our_user.id = user_stars.user_id
  #   JOIN
  #     users AS starred_users ON user_stars.starable_id = starred_users.id
  #   WHERE
  #     (our_user.id = 1) AND (user_stars.starable_type = "User")
  #
  #
  #   SQL
  # end
  #

end
