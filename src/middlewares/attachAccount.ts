import { Telegraf } from 'telegraf'
import BotContext from '../types/BotContext'
import Account from '../models/Account';

async function attachAccount(bot: Telegraf<BotContext>) {
  bot.use(async (ctx, next) => {
    if (!ctx.chat?.id) {
      return
    }

    console.log(ctx)

    const [account,] = await Account.findOrCreate({ 
      where: {
        chatId: ctx.chat.id,
      },
     })

    next()
  })
}

export default attachAccount
