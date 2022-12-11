import { Express, Request, Response } from 'express'

export default function healthCheck(app: Express): void {
  app.get('/healthcheck', (req: Request, res: Response) => {
    res.json('Server is running')
  })
}
