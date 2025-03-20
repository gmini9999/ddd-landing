<script lang="ts">
  import { toast } from '$lib/stores/toast';
  import { fade, fly } from 'svelte/transition';

  const bgColors = {
    success: 'bg-success text-success-content',
    error: 'bg-error text-error-content',
    info: 'bg-info text-info-content',
    warning: 'bg-warning text-warning-content'
  };
</script>

{#if $toast}
  <div
    class="toast toast-top toast-end z-50"
    in:fly={{ y: 50, duration: 200 }}
    out:fade
  >
    <div class="alert {bgColors[$toast.type]}">
      <span>{$toast.message}</span>
    </div>
  </div>
{/if} 