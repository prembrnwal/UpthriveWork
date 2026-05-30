import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = process.env.MONGODB_URI

let client = null

export async function connectDB() {
  if (!uri) {
    throw new Error('MONGODB_URI environment variable is not defined')
  }
  if (!client) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
      tls: true,
      tlsAllowInvalidCertificates: false,
    })
  }
  await client.connect()
  const db = client.db('UW')
  return db.collection('UWT')
}