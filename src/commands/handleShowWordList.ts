import { Telegraf } from 'telegraf'
import { t } from 'i18next'
import BotContext from '../types/BotContext'

export default function handleShowWordList(bot: Telegraf<BotContext>): void {
  bot.hears(t('button.showWordList'), async (ctx) => {
    ctx.replyWithHTML('Wordlist will be here')
  })
}
