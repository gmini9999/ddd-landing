import { showAlert } from '$lib/stores/alert';

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

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || '문의 제출 중 오류가 발생했습니다.');
    }

    showAlert('문의가 성공적으로 제출되었습니다.', 'success');
    return true;
  } catch (error) {
    showAlert(error instanceof Error ? error.message : '문의 제출 중 오류가 발생했습니다.', 'error');
    return false;
  }
} 