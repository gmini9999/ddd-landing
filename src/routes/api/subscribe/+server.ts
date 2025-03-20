import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { db } from '$lib/server/db';
import { Prisma } from '@prisma/client';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { email } = await request.json();

    if (!email) {
      return json({ error: '이메일 주소를 입력해주세요.' }, { status: 400 });
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return json({ error: '올바른 이메일 주소를 입력해주세요.' }, { status: 400 });
    }

    // 이미 구독 중인 이메일인지 확인
    const existingSubscriber = await db.subscriber.findUnique({
      where: { email }
    });

    if (existingSubscriber) {
      return json({ message: '이미 구독 중인 이메일입니다.' }, { status: 200 });
    }

    // DB에 저장
    await db.subscriber.create({
      data: {
        email,
        subscribedAt: new Date(),
      },
    });

    return json({ success: true });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      return json({ message: '이미 구독 중인 이메일입니다.' }, { status: 200 });
    }
    
    console.error('Newsletter subscription error:', error);
    return json({ error: '구독 처리 중 오류가 발생했습니다.' }, { status: 500 });
  }
}; 