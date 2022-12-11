import { server, launchServer } from './init'
import healthCheck from './controllers/healthCheck'
import words from './controllers/words'

async function runServer() {
  healthCheck(server)
  words(server)

  launchServer()
}

runServer()
