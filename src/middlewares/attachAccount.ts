import { Telegraf } from 'telegraf'
import BotContext from '../types/BotContext'
import Account from '../models/Account';
import WordList from '../models/WordList';
import { sequelize } from '../init';

async function attachAccount(bot: Telegraf<BotContext>) {
  bot.use(async (ctx, next) => {
    if (!ctx.chat?.id) {
      return
    }

    const t = await sequelize.transaction()
    let account: Account;

    try {
      account = await Account.findOne({
        where: {
          chatId: ctx.chat.id,
        },
        include: [WordList],
        transaction: t,
       })

      if (!account) {
        account = await Account.create(
          {
            chatId: ctx.chat.id,
          },
          {
            transaction: t,
          }
        )
      }

      if (account.wordlistId === null) {
        const wordlist = await WordList.create(
          {
            accountId: account.chatId,
          },
          {
            transaction: t,
          }
        )
        account.wordlistId = wordlist.id

        await account.save({
          transaction: t,
        })
      }

      t.commit()

      ctx.account = account

    } catch(e) {
      console.error(e)
      t.rollback()
    }

    next()
  })
}

export default attachAccount
