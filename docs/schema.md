# Schema Information

## Team Sites
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
owner_id       | integer   | not null, foreign key (refences users)
name           | string    | not null


## Channels
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
team_site_id   | integer   | not null, foreign key (references team sites)
title          | string    | not null
conversation   | boolean   | not null, default false, determines whether a channel is conversation or not

## Messages
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
sender_id        | integer   | not null, foreign key (references users)
messageable_id   | integer   | not null, foreign key (references users or channels)
messageable_type | string    | not null (either user or channel)
text             | string    | not null

## Users
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
username       | string    | not null, unique
password_digest| string    | not null
session_token  | string    | not null, unique

## Notifications
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
user_id        | integer   | not null, foreign key (references user)
message_id     | integer   | not null, foreign key (references message)

## Mentions
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
mentioned_id   | integer   | not null, foreign key (references user who is mentioned)
message_id     | integer   | not null, foreign key (references message)

## Favorites
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
favoriter_id      | integer   | not null, foreign key (references users)
favoritable_id    | integer   | not null, foreign key (references messages or channels)
favoriteable_type | string    | not null (either message or channel)
