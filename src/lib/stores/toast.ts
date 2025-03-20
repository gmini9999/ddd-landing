import { writable } from 'svelte/store';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastMessage {
  type: ToastType;
  message: string;
}

function createToastStore() {
  const { subscribe, set } = writable<ToastMessage | null>(null);

  return {
    subscribe,
    show: (toast: ToastMessage) => {
      set(toast);
      setTimeout(() => set(null), 3000);
    },
    hide: () => set(null)
  };
}

export const toast = createToastStore(); 