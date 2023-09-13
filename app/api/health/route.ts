import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    return new NextResponse('OK', { status: 200 });
  } catch (error) {
    console.log(error);
    return error;
  }
}
