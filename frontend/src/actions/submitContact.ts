'use server';

import { MongoClient, Db } from 'mongodb';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

/** Lazy‑initialise & cache Mongo connection */
async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('Missing MONGODB_URI environment variable');
  }

  const client = await MongoClient.connect(uri);
  const db = client.db('aparajit_group');

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export interface SubmitResult {
  success: boolean;
  message: string;
}

export async function submitContact(formData: FormData): Promise<SubmitResult> {
  if (!formData) {
    return { success: false, message: 'No form data provided' };
  }

  const name = formData.get('name') as string;
  const ctype = formData.get('ctype') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const mes = formData.get('mes') as string;

  /* basic validation */
  if (!name || !email || !phone || !ctype) {
    return { success: false, message: 'Required fields missing' };
  }

  try {
    const { db } = await connectToDatabase();

    await db.collection('contacts').insertOne({
      name,
      email,
      phone,
      ctype,
      mes,
      createdAt: new Date(),
    });
    return { success: true, message: 'Message sent successfully' };
  } catch (err) {
    console.error('Mongo insert error:', err);
    return { success: false, message: 'Database error – please try again later.' };
  }
}
