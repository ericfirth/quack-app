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
messageable_id   | integer   | not null, foreign key (references user or channel)
messageable_type | string    | not null (either user or channel)
text             | string    | not null

## Users
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
username       | string    | not null, unique
password_digest| string    | not null
session_token  | string    | not null, unique
