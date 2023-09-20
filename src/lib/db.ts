import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://thuongthanhto:thuongkute@cluster0.agwbfoe.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
}
