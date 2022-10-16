import { bot, launchBot } from './init'

async function app() {
  bot.start((ctx) => {
    ctx.reply('Hello bot!')
  })

  launchBot()
}

app()
