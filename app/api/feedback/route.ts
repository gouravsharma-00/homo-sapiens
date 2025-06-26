// app/api/feedback/route.ts
import { NextResponse } from 'next/server';
import { db } from '@lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export async function POST(request: Request) {
  console.log('Received feedback submission');
  try {
    const { name, email, message } = await request.json();

    if (!email || !message || !name) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    await addDoc(collection(db, 'feedbacks'), {
      name,
      email,
      message,
      createdAt: Timestamp.now()
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error storing feedback:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
