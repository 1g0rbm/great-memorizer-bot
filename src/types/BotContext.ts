import { TFunction } from "i18next"
import { Context } from "telegraf"
import Account from '../models/Account';

type i18n = {
  t: TFunction
}

interface BotContext extends Context {
  i18n: i18n,
  account: Account,
}

export default BotContext
