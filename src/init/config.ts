import * as dotenv from 'dotenv'
import { cleanEnv, num, str } from 'envalid'
import { cwd } from 'process'
import { resolve } from 'path'

dotenv.config({ path: resolve(cwd(), '.env') })

export default cleanEnv(process.env, {
  TELEGRAM_TOKEN: str(),
  TELEGRAM_WEBHOOK_URL: str(),
  TELEGRAM_PORT: num(),
  DB_NAME: str(),
  DB_USER: str(),
  DB_PASSWORD: str(),
  DB_HOST: str(),
})
