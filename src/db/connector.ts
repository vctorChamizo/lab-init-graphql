import mongoose from 'mongoose'
import logger from '@log'

import { DB_HOST_MONGODB } from '@constants'
import { DatabaseStatus } from '@enums'

const connect = async (): Promise<void> => {
  try {
    await mongoose.connect(`${DB_HOST_MONGODB}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      autoIndex: false
    })

    logger.info(`Connected to momngo at ${DB_HOST_MONGODB}`)
  } catch (error) {
    logger.error(`Error connecting to mongo database. ${error}`)
  }
}

const disconnect = async (): Promise<void> => {
  if (mongoose.connection.readyState !== DatabaseStatus.CONNECTED) return

  try {
    await mongoose.disconnect()

    logger.info(`Disconnected to momngo successful.`)
  } catch (error) {
    logger.error(`Error disconnecting to mongo database. ${error}`)
  }
}

export { connect, disconnect }
