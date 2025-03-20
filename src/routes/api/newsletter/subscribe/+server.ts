import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { db } from '$lib/server/db';

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

    // DB에 저장
    await db.newsletter.create({
      data: {
        email,
        subscribedAt: new Date(),
      },
    });

    return json({ success: true });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return json({ error: '구독 처리 중 오류가 발생했습니다.' }, { status: 500 });
  }
}; 