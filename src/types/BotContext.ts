import { TFunction } from "i18next"
import { Context } from "telegraf"

type i18n = {
  t: TFunction
}

interface BotContext extends Context {
  i18n: i18n
}

export default BotContext
