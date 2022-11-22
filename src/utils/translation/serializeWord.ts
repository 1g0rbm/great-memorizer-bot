import { t } from 'i18next'
import Word from '../../models/Word'

function wordFullSerialize(word: Word): string {
  return t('message.wordTranslation', {
    source: word.source,
    pos: word.pos,
    transcription: word.transcription,
    translations: word.translations.map((item) => `• ${item}`).join('\n')
  })
}

function wordShortSerialize(word: Word, amountTranslations: number = 5): string {
  return t('message.wordTranslation', {
    source: word.source,
    pos: word.pos,
    transcription: word.transcription,
    translations: word.translations
      .slice(0, amountTranslations)
      .map((item) => `• ${item}`)
      .join('\n')
  })
}

export {
  wordShortSerialize,
  wordFullSerialize
}
