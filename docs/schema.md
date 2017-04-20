# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
description     | text      | optional

## sauces
| column name | data type | details                   |
|-------------|-----------|---------------------------|
| id          | integer   | not null, primary key     |
| title       | string    | not null, indexed, unique |
| description | text      | not null                  |
| scoville units | integer   | not null                  |
| image_url   | string    | not null                  |
| company_id  | integer   | not null, indexed         |


## checkins
| column name    | data type | details               |
|----------------|-----------|-----------------------|
| id             | integer   | not null, primary key |
| overall_rating | integer   | not null, between 1-5 |
| heat_rating    | integer   | not null, between 1-5 |
| description    | text      | not null              |
| image_url      | string    | not null              |
| user_id        | integer   | not null, indexed     |
| sauce_id       | integer   | not null, indexed     |

## sauce companies
| column name | data type | details                   |
|-------------|-----------|---------------------------|
| id          | integer   | not null, primary key     |
| name        | string    | not null, unique          |
