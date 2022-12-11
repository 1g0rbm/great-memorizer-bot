const dotenv = require('dotenv')
const { cleanEnv, num, str } = require('envalid')
const { cwd } = require('process')
const { resolve } = require('path')

dotenv.config({ path: resolve(cwd(), '.env') })

module.exports = cleanEnv(process.env, {
  TELEGRAM_TOKEN: str(),
  TELEGRAM_WEBHOOK_URL: str(),
  TELEGRAM_WEBAPP_URL: str(),
  TELEGRAM_PORT: num(),
  DB_NAME: str(),
  DB_USER: str(),
  DB_PASSWORD: str(),
  DB_HOST: str(),
  SERVER_PORT: num(),
  SERVER_HOST: str(),
})
