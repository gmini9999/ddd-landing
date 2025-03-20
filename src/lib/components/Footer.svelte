<script lang="ts">
  import { handleSubscribe } from '$lib/services/subscribe';
  
  let email = '';
  let isSubmitting = false;

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!email || isSubmitting) return;

    isSubmitting = true;
    const success = await handleSubscribe(email);
    if (success) {
      email = '';
    }
    isSubmitting = false;
  }
</script>

<footer class="bg-base-200">
  <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="space-y-3">
        <h3 class="text-lg font-bold text-base-content mb-4">회사 정보</h3>
        <div class="space-y-2 text-sm">
          <p class="flex items-center">
            <span class="font-medium w-16 text-base-content/90">주소:</span>
            <span class="text-base-content/80">경기도 성남시 분당구 대왕판교로 645번길 12, 8층 R06호</span>
          </p>
          <p class="flex items-center">
            <span class="font-medium w-16 text-base-content/90">전화:</span>
            <a href="tel:070-7954-6082" class="text-base-content/80 hover:text-primary">
              070-7954-6082
            </a>
          </p>
          <p class="flex items-center">
            <span class="font-medium w-16 text-base-content/90">이메일:</span>
            <a href="mailto:contact@themero.net" class="text-base-content/80 hover:text-primary">
              contact@themero.net
            </a>
          </p>
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-bold text-base-content mb-4">뉴스레터 구독</h3>
        <p class="text-sm text-base-content/80 mb-3">최신 소식과 업데이트를 이메일로 받아보세요.</p>
        <form class="flex flex-col sm:flex-row gap-2" on:submit={handleSubmit}>
          <div class="relative flex-1">
            <input 
              type="email" 
              bind:value={email}
              placeholder="이메일 주소를 입력하세요" 
              class="input input-md w-full bg-base-100 pr-28 border-base-300 focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
              disabled={isSubmitting}
            />
            <button 
              type="submit" 
              class="btn btn-md btn-primary absolute right-0 top-0 rounded-l-none"
              disabled={isSubmitting}
            >
              {#if isSubmitting}
                <span class="loading loading-spinner loading-sm"></span>
              {:else}
                구독하기
              {/if}
            </button>
          </div>
        </form>
      </div>
    </div>
    
    <div class="mt-6 pt-4 border-t border-base-content/10 text-center">
      <p class="text-sm text-base-content/60">Copyright &copy; 2025 Mero Inc. All rights reserved.</p>
    </div>
  </div>
</footer> 