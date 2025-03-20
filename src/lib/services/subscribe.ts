import { showAlert } from '$lib/stores/alert';

async function subscribe(email: string) {
  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || '구독 처리 중 오류가 발생했습니다.');
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('구독 처리 중 오류가 발생했습니다.');
  }
}

export async function handleSubscribe(email: string) {
  try {
    if (!email) {
      showAlert('이메일 주소를 입력해주세요.', 'error');
      return false;
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showAlert('올바른 이메일 주소를 입력해주세요.', 'error');
      return false;
    }

    await subscribe(email);
    showAlert('뉴스레터 구독이 완료되었습니다.', 'success');
    return true;
  } catch (error) {
    const message = error instanceof Error ? error.message : '구독 처리 중 오류가 발생했습니다.';
    console.error('Newsletter subscription error:', message);
    showAlert(message, 'error');
    return false;
  }
} 