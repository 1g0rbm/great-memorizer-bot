import { Express, Request, Response } from 'express'
import Word from '../models/Word'
import WordList from '../models/WordList'

export default function words(app: Express): void {
  app.get('/wordlist/:userId', async (req: Request, res: Response) => {

    const list = await WordList.findOne({
      where: {
        accountId: req.params.userId,
      },
      include: [Word],
    })

    res.json(list.words)
  })
}
