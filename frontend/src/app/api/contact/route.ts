import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import Contact from '@/models/Contact'

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, phone, email, type } = body

    if (!name || !phone || !email || !type) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    await connectToDatabase()

    const newContact = await Contact.create({ name, phone, email, type })

    return NextResponse.json({ message: 'Form submitted', data: newContact }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
