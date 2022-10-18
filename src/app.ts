import handleTranslate from './commands/handleTranslate'
import { bot, launchBot, i18n } from './init'
import configurei18n from './middlewares/configurei18n'

async function app() {

  await configurei18n(bot)

  bot.start((ctx) => {
    ctx.reply('Hello bot!')
  })

  handleTranslate(bot)

  launchBot()
}

app()
    .then(() => {
        console.log('Bot is running...')
    })
