import { MongoClient } from "mongodb";


export async function connectDB() {
  const client = await MongoClient.connect(
    "mongodb+srv://tsdimitrov93:tsdimitrov93@cluster0.uqe89iy.mongodb.net/events?retryWrites=true&w=majority"
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  await db.collection(collection).insertOne(document);
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();
  return await db.collection(collection).find().sort(sort).toArray();
}
