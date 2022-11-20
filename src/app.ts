import handleTranslate from './commands/handleTranslate'
import handleShowWordList from './commands/handleShowWordList'
import { bot, launchBot } from './init'
import configurei18n from './middlewares/configurei18n'
import attachAccount from './middlewares/attachAccount'

async function app() {

  await configurei18n(bot)
  await attachAccount(bot)

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

  handleShowWordList(bot)
  handleTranslate(bot)

  launchBot()
}

app()
  .then(() => {
    console.log('Bot is running...')
  })
