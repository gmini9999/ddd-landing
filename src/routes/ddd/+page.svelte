<script lang="ts">
  import { onMount } from 'svelte';
  import { setupScrollAnimation } from '$lib/utils/animations';
  import '$lib/styles/animations.css';

  onMount(() => {
    return setupScrollAnimation();
  });
</script>

<div class="pt-16">
  <!-- Hero Section -->
  <section class="relative overflow-hidden py-20 bg-gradient-to-br from-brand-darker via-brand-dark to-brand-primary/30">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center text-white">
        <h1 class="text-5xl font-bold mb-6">Don't Don Dan</h1>
        <p class="text-xl text-brand-light">AI 프롬프트 보안의 새로운 기준</p>
        <p class="mt-4 text-lg text-brand-lighter">안전하고 신뢰할 수 있는 AI 활용 환경을 위한 실시간 모니터링 솔루션</p>
      </div>
    </div>
  </section>

  <!-- Overview Section -->
  <section class="py-20 bg-gradient-to-br from-brand-lighter/20 to-white">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="animate-on-scroll">
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 class="text-3xl font-bold mb-6 text-brand-darker">AI 보안의 새로운 패러다임</h2>
              <p class="text-lg text-brand-darker/70 mb-8 leading-relaxed">
                ChatGPT 등 대형 언어모델(LLM)의 활용이 증가하면서, AI 보안의 중요성이 더욱 커지고 있습니다.
                Don't Don Dan은 유해하고 부적절한 프롬프트를 실시간으로 감지하고 차단하여,
                기업의 AI 서비스를 안전하게 보호합니다.
              </p>
              <div class="bg-brand-primary/5 rounded-xl p-6 border border-brand-primary/10">
                <h3 class="text-xl font-bold mb-4 text-brand-darker">핵심 가치</h3>
                <ul class="space-y-3">
                  <li class="flex items-center text-brand-darker/70">
                    <i class="fas fa-shield-alt text-brand-primary mr-3"></i>
                    <span>실시간 유해 프롬프트 차단</span>
                  </li>
                  <li class="flex items-center text-brand-darker/70">
                    <i class="fas fa-chart-line text-brand-primary mr-3"></i>
                    <span>지속적인 모델 업데이트</span>
                  </li>
                  <li class="flex items-center text-brand-darker/70">
                    <i class="fas fa-cogs text-brand-primary mr-3"></i>
                    <span>맞춤형 보안 정책 설정</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="bg-gradient-to-br from-brand-primary/10 to-brand-lighter/10 p-8 rounded-3xl">
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="bg-white p-3 rounded-lg shadow-sm">
                    <i class="fas fa-filter text-brand-primary text-2xl"></i>
                  </div>
                  <div class="ml-4">
                    <h3 class="font-bold text-brand-darker mb-1">실시간 필터링</h3>
                    <p class="text-brand-darker/70">AI 모델 입력 전 악성 프롬프트 자동 감지</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="bg-white p-3 rounded-lg shadow-sm">
                    <i class="fas fa-tachometer-alt text-brand-primary text-2xl"></i>
                  </div>
                  <div class="ml-4">
                    <h3 class="font-bold text-brand-darker mb-1">관리 대시보드</h3>
                    <p class="text-brand-darker/70">실시간 모니터링 및 통계 분석</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="bg-white p-3 rounded-lg shadow-sm">
                    <i class="fas fa-sliders-h text-brand-primary text-2xl"></i>
                  </div>
                  <div class="ml-4">
                    <h3 class="font-bold text-brand-darker mb-1">정책 커스터마이징</h3>
                    <p class="text-brand-darker/70">기업별 맞춤 보안 규칙 설정</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="animate-on-scroll">
          <h2 class="text-3xl font-bold text-center mb-16 text-brand-darker">주요 기능</h2>
          <div class="grid md:grid-cols-4 gap-8">
            <div class="bg-white p-8 rounded-2xl shadow-lg border border-brand-primary/10">
              <div class="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-shield-alt text-brand-primary text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-4 text-brand-darker">프롬프트 필터링</h3>
              <p class="text-brand-darker/70">적대적 입력을 사전에 감지하고 차단하는 실시간 보안</p>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-lg border border-brand-primary/10">
              <div class="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-chart-bar text-brand-primary text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-4 text-brand-darker">모니터링 대시보드</h3>
              <p class="text-brand-darker/70">차단 통계와 사용자 패턴을 한눈에 파악</p>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-lg border border-brand-primary/10">
              <div class="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-cog text-brand-primary text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-4 text-brand-darker">맞춤형 정책</h3>
              <p class="text-brand-darker/70">산업별 규제와 내부 기준에 맞는 설정</p>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-lg border border-brand-primary/10">
              <div class="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-sync text-brand-primary text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-4 text-brand-darker">지속적 업데이트</h3>
              <p class="text-brand-darker/70">최신 위협에 대응하는 모델 고도화</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Technology Section -->
  <section class="py-20 bg-gradient-to-br from-brand-lighter/20 to-white">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="animate-on-scroll">
          <h2 class="text-3xl font-bold text-center mb-16 text-brand-darker">핵심 기술</h2>
          <div class="grid md:grid-cols-2 gap-12">
            <div class="bg-white p-8 rounded-2xl shadow-lg border border-brand-primary/10">
              <h3 class="text-2xl font-bold mb-6 text-brand-darker">하이브리드 필터링</h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <i class="fas fa-check text-brand-primary mt-1 mr-3"></i>
                  <span class="text-brand-darker/70">키워드 필터와 정규식 기반 검사</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-brand-primary mt-1 mr-3"></i>
                  <span class="text-brand-darker/70">머신러닝/딥러닝 모델을 통한 문맥 분석</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-brand-primary mt-1 mr-3"></i>
                  <span class="text-brand-darker/70">오탐과 누락을 최소화하는 복합 접근</span>
                </li>
              </ul>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-lg">
              <h3 class="text-2xl font-bold mb-6 text-brand-darker">클라우드 네이티브</h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <i class="fas fa-check text-brand-primary mt-1 mr-3"></i>
                  <span class="text-brand-darker/70">API/SaaS 형태의 유연한 서비스</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-brand-primary mt-1 mr-3"></i>
                  <span class="text-brand-darker/70">자동 스케일링으로 안정적 운영</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-brand-primary mt-1 mr-3"></i>
                  <span class="text-brand-darker/70">실시간 업데이트와 모니터링</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>

<style>
  :global(.animate-on-scroll) {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  :global(.animate-on-scroll.show) {
    opacity: 1;
    transform: translateY(0);
  }

  :global(section:not(:first-child)) {
    opacity: 0;
    transition: opacity 0.8s ease;
  }

  :global(section:not(:first-child).show) {
    opacity: 1;
  }
</style> 