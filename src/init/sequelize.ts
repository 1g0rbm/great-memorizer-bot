import config from "./config"

export default {
  "development": {
    "username": config.DB_USER,
    "password": config.DB_PASSWORD,
    "database": config.DB_NAME,
    "host": config.DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": config.DB_USER,
    "password": config.DB_PASSWORD,
    "database": config.DB_NAME,
    "host": config.DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": config.DB_USER,
    "password": config.DB_PASSWORD,
    "database": config.DB_NAME,
    "host": config.DB_HOST,
    "dialect": "postgres"
  }
}
