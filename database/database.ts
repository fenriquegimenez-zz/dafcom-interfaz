import mongoose from 'mongoose'
import { TMongoConnection, mongoUri } from '../helpers/variables'

const connection: TMongoConnection = {}

export default async function connectDb() {
  if (connection.isConnected) {
    return
  }
  const db = await mongoose.connect(mongoUri)
  connection.isConnected = db.connections[0].readyState
  console.log('[DB] Database connections: ' + connection.isConnected)
}
