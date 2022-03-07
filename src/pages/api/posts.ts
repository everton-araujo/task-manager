import { VercelRequest, VercelResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'
import url from 'url'

let cachedDb: Db = null;

export async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri);

  const dbName = url.parse(uri).pathname.substring(1);

  const db = client.db(dbName);

  cachedDb = db;

  return db;
}

export default async (request: VercelRequest, response: VercelResponse) => {
  const { user, message } = request.body

  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection('cards');

  await collection.insertOne({
    user,
    message,
    postedAt: new Date()
  })

  return response.status(201).json({ ok: true });
}
