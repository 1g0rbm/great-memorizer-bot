import WordList from '../../models/WordList'
import Account from '../../models/Account';

async function findWordListByAccount(account: Account): Promise<WordList|null> {
  const wordlist = await WordList.findOne({
    where: {
      id: account.wordlistId
    }
  })

  return wordlist;
}

export default findWordListByAccount
