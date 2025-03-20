import { toast } from '$lib/stores/toast';

interface ContactForm {
  name: string;
  email: string;
  company: string;
  type: string;
  message: string;
}

export async function submitContact(formData: ContactForm) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('문의 접수 중 오류가 발생했습니다.');
    }

    toast.show({
      type: 'success',
      message: '문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.'
    });
    return true;
  } catch (error) {
    toast.show({
      type: 'error',
      message: error instanceof Error ? error.message : '문의 접수 중 오류가 발생했습니다.'
    });
    return false;
  }
} 