import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://admin930730:admin930730@cluster0.3puzy4b.mongodb.net/auth?retryWrites=true&w=majority"
  );

  return client
}
