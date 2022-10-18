import { Telegraf } from 'telegraf'
import BotContext from '../types/BotContext'
import config from './config'

const bot: Telegraf<BotContext> = new Telegraf(config.TELEGRAM_TOKEN)

function launchBot() {
  bot.launch({
    webhook: {
      domain: config.TELEGRAM_WEBHOOK_URL,
      port: config.TELEGRAM_PORT
    }
  })
}

export { bot, launchBot }
