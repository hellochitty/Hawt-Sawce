# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## sauces
| column name  | data type | details                    |
|--------------|-----------|----------------------------|
| id           | integer   | not null, primary key      |
| title        | string    | not null,  indexed, unique |
| manufacturer | string    | not null, indexed          |
| description  | text      | not null                   |
| image_url    | string    | not null                   |
