import express, { Express } from 'express'
import config from './config'

const server  = <Express>express()

function launchServer() {
  server.listen(config.SERVER_PORT, config.SERVER_HOST, () => {
    console.log(`Server is running on port ${config.SERVER_PORT}...`)
  })
}

export {server, launchServer}
