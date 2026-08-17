import { NextResponse } from 'next/server'
import { generateTopics } from '../../../lib/topic'
export async function POST(req: Request) {
  const input = await req.json()
  return NextResponse.json({ topics: generateTopics(input), generatedAt: new Date().toISOString() })
}