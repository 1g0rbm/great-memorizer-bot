import { Telegraf, Context } from 'telegraf'
import Word from '../models/Word';
import BotContext from '../types/BotContext';
import findWordListByAccount from '../utils/db/getWordListByAccount';

export default function handleTranslate(bot: Telegraf<BotContext>): void {
  bot.on('text', async (ctx) => {
    const words = await Word.findAll({
      where: {
        source: ctx.message.text
      }
    })

    const translations = words.map((word: Word) => (
      ctx.i18n.t('message.wordTranslation', {
        pos: word.pos,
        transcription: word.transcription,
        translations: word.translations.map((item) => `• ${item}`).join('\n')
      })
    ))

    const reply = translations.length === 0
      ? { text: ctx.i18n.t('message.noResult'), markup: {} }
      : {
        text: translations.join('\n\n'),
        markup: {
          reply_markup: {
            inline_keyboard: [
              [{
                text: ctx.i18n.t('button.addWordIntoList'),
                callback_data: `save.${ctx.message.text}`
              }],
            ]
          }
        }
      }

    ctx.replyWithHTML(reply.text, reply.markup)
  })

  bot.action(/save\./, async (ctx) => {
    const [, source] = ctx.callbackQuery.data.split('.')
    const words = await Word.findAll({
      where: { source },
    })

    const wordlist = await findWordListByAccount(ctx.account)

    words.forEach((word) => wordlist.$add('word', word))

    ctx.answerCbQuery()
    ctx.replyWithHTML(ctx.i18n.t('message.wordAddedIntoList'))
  })
}
