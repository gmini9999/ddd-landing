import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { db } from '$lib/server/db';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { name, email, company, type, message } = await request.json();

    // 필수 필드 검증
    if (!name || !email || !type || !message) {
      return json(
        { error: '이름, 이메일, 문의 유형, 메시지는 필수 입력 항목입니다.' },
        { status: 400 }
      );
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return json({ error: '올바른 이메일 주소를 입력해주세요.' }, { status: 400 });
    }

    // DB에 저장
    await db.contact.create({
      data: {
        name,
        email,
        company,
        type,
        message,
        createdAt: new Date(),
      },
    });

    return json({ success: true });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return json({ error: '문의 제출 중 오류가 발생했습니다.' }, { status: 500 });
  }
}; 