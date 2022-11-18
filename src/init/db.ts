import { resolve } from 'path'
import { Sequelize } from 'sequelize-typescript'
import config from './config'
const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASSWORD,
  {
    host: config.DB_HOST,
    port: 5432,
    dialect: 'postgres'
  }
)

sequelize.addModels([resolve(__dirname, '../models')])

export { Sequelize, sequelize }
