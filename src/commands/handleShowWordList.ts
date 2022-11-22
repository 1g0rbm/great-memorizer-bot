import { Telegraf } from 'telegraf'
import { t } from 'i18next'
import BotContext from '../types/BotContext'
import { wordShortSerialize } from '../utils/translation/serializeWord'

export default function handleShowWordList(bot: Telegraf<BotContext>): void {
  bot.hears(t('button.showWordList'), async (ctx) => {
    const [wordlist] = ctx.account.wordlists

    const text = (await wordlist.$get('words'))
      .map((word) => wordShortSerialize(word, 3))
      .join('\n\n')

    ctx.replyWithHTML(text)
  })
}
