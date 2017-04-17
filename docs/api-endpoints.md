# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Sauces

- `GET /api/sauces`
  - Sauce index/search
- `POST /api/sauces`
- `GET /api/sauces/:sauce_id`
- `PATCH /api/sauces/:sauce_id`
- `DELETE /api/sauces/:sauce_id`
- `GET /api/sauces/:sauce_id/checkins`
  - Get checkins for a sauce

### Check-Ins
- `GET /api/check_ins`
  - Check-In index
- `GET /api/users/:user_id/check_ins`
  - Check-In index by user
- `POST /api/users/:user_id/check_ins`
- `GET POST /api/users/:user_id/check_ins/:checkin_id`
- `PATCH /api/users/:user_id/check_ins/:checkin_id`
- `DELETE /api/users/:user_id/check_ins/:checkin_id`
