import { toast } from '$lib/stores/toast';

export async function subscribe(email: string) {
  const response = await fetch('/api/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error || '구독 처리 중 오류가 발생했습니다.');
  }

  return response.json();
}

export async function handleSubscribe(email: string) {
  try {
    await subscribe(email);
    toast.show({
      type: 'success',
      message: '뉴스레터 구독이 완료되었습니다.'
    });
    return true;
  } catch (error) {
    toast.show({
      type: 'error',
      message: error instanceof Error ? error.message : '구독 처리 중 오류가 발생했습니다.'
    });
    return false;
  }
} 