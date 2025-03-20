import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { db } from '$lib/server/db';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const formData = await request.json();

    const contact = await db.contact.create({
      data: {
        name: formData.name,
        email: formData.email,
        company: formData.company || '',
        type: formData.type,
        message: formData.message,
      },
    });

    return json({ success: true, data: contact });
  } catch (error) {
    console.error('Contact submission error:', error);
    return json({ error: '문의 접수 중 오류가 발생했습니다.' }, { status: 500 });
  }
}; 