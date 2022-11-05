import handleTranslate from './commands/handleTranslate'
import { bot, launchBot, i18n, sequelize } from './init'
import configurei18n from './middlewares/configurei18n'
import attachAccount from './middlewares/attachAccount'

async function app() {

  await configurei18n(bot)
  await attachAccount(bot)

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
