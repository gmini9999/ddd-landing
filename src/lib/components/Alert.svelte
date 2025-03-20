<script lang="ts">
  import { alert } from '$lib/stores/alert';
  import { fade, scale } from 'svelte/transition';

  const bgColors = {
    success: 'bg-white text-success',
    error: 'bg-white text-error',
    info: 'bg-white text-info',
    warning: 'bg-white text-warning'
  };

  function closeAlert() {
    alert.close();
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeAlert();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if $alert}
  <div 
    class="fixed inset-0 z-[9999] flex items-center justify-center"
    role="dialog"
    aria-modal="true"
    aria-labelledby="alert-title"
  >
    <!-- 배경 오버레이 -->
    <button
      type="button"
      class="absolute inset-0 bg-black/50 backdrop-blur-sm"
      aria-label="알림 닫기"
      on:click={closeAlert}
    ></button>
    
    <!-- 알림 내용 -->
    <div 
      class="modal-box relative w-96 py-6 px-5 shadow-lg {bgColors[$alert.type]}"
      role="alertdialog"
    >
      <!-- 닫기 버튼 -->
      <button
        type="button"
        class="btn btn-sm btn-ghost absolute right-3 top-3"
        aria-label="닫기"
        on:click={closeAlert}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>

      <div class="flex flex-col items-center space-y-5 pt-5">
        <p id="alert-title" class="text-center text-base font-medium leading-relaxed">{$alert.message}</p>
        <button 
          type="button"
          class="btn btn-md min-w-[120px] px-8 text-white {$alert.type === 'error' ? 'btn-error' : 'btn-success'}"
          on:click={closeAlert}
          aria-label="확인"
        >
          확인
        </button>
      </div>
    </div>
  </div>
{/if} 