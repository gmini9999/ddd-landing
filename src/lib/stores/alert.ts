import { writable } from 'svelte/store';

type AlertType = 'success' | 'error' | 'info' | 'warning';

interface AlertData {
  type: AlertType;
  message: string;
}

function createAlertStore() {
  const { subscribe, set } = writable<AlertData | null>(null);

  return {
    subscribe,
    show: (message: string, type: AlertType = 'info') => {
      set({ message, type });
    },
    close: () => set(null)
  };
}

export const alert = createAlertStore();

export function showAlert(message: string, type: AlertType = 'info') {
  alert.show(message, type);
  
  // 3초 후 자동으로 닫기 (선택사항)
  // setTimeout(() => {
  //   alert.close();
  // }, 3000);
} 