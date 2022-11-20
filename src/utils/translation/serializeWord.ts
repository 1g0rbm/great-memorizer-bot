import { t } from 'i18next'
import Word from '../../models/Word'

function wordsFullSerialize(words: Word[]): string {
  return words.map(wordFullSerialize).join('\n\n')
}

function wordFullSerialize(word: Word): string {
  return t('message.wordTranslation', {
    pos: word.pos,
    transcription: word.transcription,
    translations: word.translations.map((item) => `• ${item}`).join('\n')
  })
}

export {
  wordsFullSerialize,
  wordFullSerialize
}
