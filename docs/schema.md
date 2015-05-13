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

## Messages
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
sender_id        | integer   | not null, foreign key (references users)
channel_id       | integer   | not null, foreign key (references channels)
text             | string    | not null

## Private Messages
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
sender_id        | integer   | not null, foreign key (references users)
receiver_id      | integer   | not null, foreign key (references users)
text             | string    | not null

## Users
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
username       | string    | not null, unique
password_digest| string    | not null
session_token  | string    | not null, unique
email          | string    | not null, unique

## Channel_Memberships
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
user_id        | integer   | not null, foreign key (references users)
channel_id     | integer   | not null, foreign key (references channels)

## Team_Site_Memberships
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
user_id        | integer   | not null, foreign key (references users)
team_site_id   | integer   | not null, foreign key (references team sites)

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
