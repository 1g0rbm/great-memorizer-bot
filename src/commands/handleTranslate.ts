import { Telegraf, Context } from 'telegraf'
import Word, { WordInstance } from '../models/Word';
import BotContext from '../types/BotContext';

export default function handleTranslate(bot: Telegraf<BotContext>): void {
  bot.on('text', async (ctx) => {
    const words = await Word.findAll({
      where: {
        source: ctx.message.text
      }
    })

    const translations = words.map((word: WordInstance) => (
      ctx.i18n.t('wordTranslation', {
        pos: word.pos,
        transcription: word.transcription,
        translations: word.translations.map((item) => `• ${item}`).join('\n')
      })
    ))

    const reply = translations.length === 0
      ? ctx.i18n.t('noResult')
      : translations.join('\n\n')

    ctx.replyWithHTML(reply);
  });
}
