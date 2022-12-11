import handleTranslate from './commands/handleTranslate'
import handleShowWordList from './commands/handleShowWordList'
import { bot, launchBot } from './init'
import configurei18n from './middlewares/configurei18n'
import attachAccount from './middlewares/attachAccount'
import handleStartAndHelp from './commands/handleStartAndHelp'

async function runBot() {

  await configurei18n(bot)
  await attachAccount(bot)

  handleStartAndHelp(bot)
  handleShowWordList(bot)
  handleTranslate(bot)

  launchBot()
}

runBot()
  .then(() => {
    console.log('Bot is running...')
  })
