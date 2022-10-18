import { Telegraf } from 'telegraf'
import { t } from 'i18next'
import BotContext from '../types/BotContext'
import { i18n } from '../init'

async function configurei18n(bot: Telegraf<BotContext>) {
  await i18n()

  bot.use((ctx, next) => {
    ctx.i18n = { t }

    next()
  })
}

export default configurei18n
