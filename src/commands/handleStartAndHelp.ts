import BotContext from '../types/BotContext'
import { Telegraf } from 'telegraf'

export default function handleStartAndHelp(bot: Telegraf<BotContext>): void {
  bot.start((ctx) => {
    const markup = {}
    if (ctx.account.wordlists.length > 0) {
      markup['reply_markup'] = {
        keyboard: [
          [{
            text: ctx.i18n.t('button.addWordIntoList'),
            callback_data: `save.${ctx.message.text}`
          }],
        ]
      }
    }

    ctx.replyWithHTML(
      ctx.i18n.t('message.start'),
      {
        reply_markup: {
          keyboard: [
            [{ text: ctx.i18n.t('button.showWordList') }],
          ],
          resize_keyboard: true,
        },
      }
    )
  })

  bot.help((ctx) => {
    const markup = {}
    if (ctx.account.wordlists.length > 0) {
      markup['reply_markup'] = {
        keyboard: [
          [{
            text: ctx.i18n.t('button.addWordIntoList'),
            callback_data: `save.${ctx.message.text}`
          }],
        ]
      }
    }

    ctx.replyWithHTML(
      ctx.i18n.t('message.start'),
      {
        reply_markup: {
          keyboard: [
            [{ text: ctx.i18n.t('button.showWordList') }],
          ],
          resize_keyboard: true,
        },
      }
    )
  })
}