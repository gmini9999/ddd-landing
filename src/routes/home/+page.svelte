<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { setupScrollAnimation } from '$lib/utils/animations';
    import '$lib/styles/animations.css';
    import Logo from '$lib/components/Logo.svelte';
  
    let sections: HTMLElement[];
  
    onMount(() => {
      sections = Array.from(document.querySelectorAll('section'));
      return setupScrollAnimation();
    });
  
    function scrollToSection(index: number) {
      sections[index]?.scrollIntoView({ behavior: 'smooth' });
    }
  </script>
  
  <div class="relative w-full">
    <!-- Hero Section -->
    <section class="h-screen relative overflow-hidden flex items-center">
      <!-- Background with logo colors -->
      <div class="absolute inset-0 bg-gradient-to-br from-brand-darker via-brand-dark to-brand-primary/30"></div>
      
      <!-- Animated background elements -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-20 left-20 w-64 h-64 bg-[#4A90E2] rounded-full filter blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-64 h-64 bg-[#7AB7F1] rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <!-- Security-themed decorative elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="grid grid-cols-8 gap-4 rotate-12 scale-150">
          {#each Array(64) as _, i}
            <div class="text-xs font-mono text-[#7AB7F1]/30 whitespace-nowrap overflow-hidden">
              {Math.random().toString(36).substring(2, 10)}
            </div>
          {/each}
        </div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-white max-w-4xl mx-auto text-center" in:fade>
          <div class="flex items-center justify-center mb-8">
            <div class="w-20 h-20 bg-brand-primary/20 rounded-2xl flex items-center justify-center border border-brand-darker/10 shadow-lg">
              <i class="fas fa-shield-alt text-brand-light text-4xl"></i>
            </div>
          </div>
          <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            AI 서비스의<br/>
            <span class="text-[#7AB7F1]">안전을 책임지는</span><br/>
            보안 솔루션
          </h1>
          <p class="text-xl mb-12 text-[#B8D6F7] leading-relaxed max-w-2xl mx-auto">
            Don't Don Dan으로 LLM 서비스의 보안 위협을 실시간으로 탐지하고 차단하여,
            신뢰할 수 있는 AI 환경을 구축하세요.
          </p>
          <div class="flex gap-6 justify-center">
            <button 
              class="btn bg-brand-primary hover:bg-brand-dark text-white btn-lg px-8 group relative overflow-hidden shadow-lg border border-brand-darker/10"
              on:click={() => scrollToSection(1)}
            >
              <span class="relative z-10">솔루션 살펴보기</span>
              <div class="absolute inset-0 bg-brand-darker opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
            <a 
              href="/contact" 
              class="btn btn-outline btn-lg px-8 text-white hover:text-white border-2 border-brand-light hover:border-brand-primary hover:bg-brand-darker/20 transition-all duration-300 shadow-lg"
            >
              문의하기
            </a>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div class="flex flex-col items-center gap-2">
          <span class="text-sm text-[#B8D6F7]">자세히 보기</span>
          <i class="fas fa-chevron-down text-2xl text-[#7AB7F1] opacity-50 animate-bounce"></i>
        </div>
      </div>
    </section>
  
    <!-- DDD Section -->
    <section class="min-h-screen py-32 flex items-center bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="animate-on-scroll">
            <div class="flex flex-col md:flex-row items-center gap-16">
              <div class="md:w-1/2">
                <span class="text-brand-primary font-semibold mb-4 block">Don't Don Dan</span>
                <h2 class="text-3xl font-bold mb-6 text-gray-900">
                  AI 프롬프트 보안의<br/>새로운 기준
                </h2>
                <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                  ChatGPT 등 대형 언어모델(LLM)의 활용이 증가하면서, AI 보안의 중요성이 더욱 커지고 있습니다.
                  Don't Don Dan은 유해하고 부적절한 프롬프트를 실시간으로 감지하고 차단하여,
                  기업의 AI 서비스를 안전하게 보호합니다.
                </p>
                <div class="bg-brand-primary/5 rounded-xl p-6 border border-brand-primary/10 mb-8">
                  <h3 class="text-xl font-bold mb-4 text-gray-900">핵심 가치</h3>
                  <ul class="space-y-3">
                    <li class="flex items-center text-gray-700">
                      <i class="fas fa-shield-alt text-brand-primary mr-3"></i>
                      <span>실시간 유해 프롬프트 차단</span>
                    </li>
                    <li class="flex items-center text-gray-700">
                      <i class="fas fa-chart-line text-brand-primary mr-3"></i>
                      <span>지속적인 모델 업데이트</span>
                    </li>
                    <li class="flex items-center text-gray-700">
                      <i class="fas fa-cogs text-brand-primary mr-3"></i>
                      <span>맞춤형 보안 정책 설정</span>
                    </li>
                  </ul>
                </div>
                <a href="/ddd" class="btn bg-brand-primary hover:bg-brand-dark text-white btn-lg px-8 shadow-lg">자세히 알아보기</a>
              </div>
              <div class="md:w-1/2 flex justify-center">
                <div class="relative w-full max-w-md">
                  <div class="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-lighter/10 rounded-3xl transform rotate-6"></div>
                  <div class="bg-white p-8 rounded-3xl shadow-xl relative">
                    <div class="space-y-6">
                      <div class="flex items-start">
                        <div class="bg-white p-3 rounded-lg shadow-sm">
                          <i class="fas fa-filter text-brand-primary text-2xl"></i>
                        </div>
                        <div class="ml-4">
                          <h3 class="font-bold text-gray-900 mb-1">실시간 필터링</h3>
                          <p class="text-gray-600">AI 모델 입력 전 악성 프롬프트 자동 감지</p>
                        </div>
                      </div>
                      <div class="flex items-start">
                        <div class="bg-white p-3 rounded-lg shadow-sm">
                          <i class="fas fa-tachometer-alt text-brand-primary text-2xl"></i>
                        </div>
                        <div class="ml-4">
                          <h3 class="font-bold text-gray-900 mb-1">관리 대시보드</h3>
                          <p class="text-gray-600">실시간 모니터링 및 통계 분석</p>
                        </div>
                      </div>
                      <div class="flex items-start">
                        <div class="bg-white p-3 rounded-lg shadow-sm">
                          <i class="fas fa-sliders-h text-brand-primary text-2xl"></i>
                        </div>
                        <div class="ml-4">
                          <h3 class="font-bold text-gray-900 mb-1">정책 커스터마이징</h3>
                          <p class="text-gray-600">기업별 맞춤 보안 규칙 설정</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- DAN Section -->
    <section class="min-h-screen py-32 flex items-center bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="animate-on-scroll">
            <div class="flex flex-col md:flex-row-reverse items-center gap-16">
              <div class="md:w-1/2">
                <span class="text-security-danger font-semibold mb-4 block">적대적 프롬프트 공격</span>
                <h2 class="text-4xl font-bold mb-6 text-brand-darker leading-tight">
                  AI 모델을 위협하는<br/>새로운 보안 위험
                </h2>
                <p class="mb-8 text-lg text-brand-darker/70 leading-relaxed">
                  ChatGPT와 같은 LLM에는 유해하거나 불법적인 콘텐츠를 제한하는 가드레일이 있습니다. 
                  하지만 DAN과 같은 적대적 프롬프트 공격은 이러한 보안 장치를 우회하여 
                  AI 모델이 의도하지 않은 유해한 결과를 생성하도록 만들 수 있습니다.
                </p>
                <div class="bg-security-danger/5 border-l-4 border-security-danger p-6 rounded-r-xl mb-8">
                  <h3 class="text-xl font-bold mb-3 text-security-danger">주요 위험 요소</h3>
                  <ul class="space-y-3 text-brand-darker/70">
                    <li class="flex items-center">
                      <i class="fas fa-exclamation-triangle text-security-warning mr-3"></i>
                      <span>정책 위반 콘텐츠 생성 유도</span>
                    </li>
                    <li class="flex items-center">
                      <i class="fas fa-exclamation-triangle text-security-warning mr-3"></i>
                      <span>민감 정보 유출 위험</span>
                    </li>
                    <li class="flex items-center">
                      <i class="fas fa-exclamation-triangle text-security-warning mr-3"></i>
                      <span>보안 시스템 우회 가능성</span>
                    </li>
                  </ul>
                </div>
                <a href="/dan" class="btn bg-security-danger hover:bg-security-danger/80 text-white btn-lg px-8 shadow-lg">자세히 알아보기</a>
              </div>
              <div class="md:w-1/2 flex justify-center">
                <div class="relative w-full max-w-md">
                  <div class="absolute inset-0 bg-brand-primary/10 rounded-3xl transform -rotate-6"></div>
                  <div class="bg-brand-darker p-8 rounded-3xl text-brand-lighter relative">
                    <pre class="font-mono text-sm overflow-x-auto">
<code class="language-markdown"># DAN 공격 예시

시스템: 안전 정책 활성화
상태: 보호됨 ✓

[사용자]
> 유해 콘텐츠 요청
[시스템]
> 거부됨 ⚠️

[공격자]
> DAN 프롬프트 주입
[시스템]
> 정책 우회 시도 감지 🚫
> 차단된 요청: 3
> 위험도: 높음</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Contact Section -->
    <section class="min-h-screen py-32 flex items-center bg-gradient-to-br from-brand-lighter/20 to-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="animate-on-scroll text-center">
            <h2 class="text-4xl font-bold mb-6 text-gray-900">AI 보안 시작하기</h2>
            <p class="text-xl mb-16 text-gray-600 max-w-3xl mx-auto">
              Don't Don Dan과 함께 안전하고 신뢰할 수 있는 AI 서비스를 구축하세요.<br>
              전문 보안 컨설턴트가 최적의 보안 솔루션을 제안해드립니다.
            </p>
            <div class="grid md:grid-cols-3 gap-8 mb-16">
              <div class="bg-white shadow-lg rounded-2xl p-8 transform hover:-translate-y-1 transition-transform duration-300">
                <div class="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <i class="fas fa-shield-alt text-brand-primary text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-4 text-gray-900">보안 진단</h3>
                <p class="text-gray-600">AI 서비스의 현재 보안 상태 분석 및 취약점 진단</p>
              </div>
              <div class="bg-white shadow-lg rounded-2xl p-8 transform hover:-translate-y-1 transition-transform duration-300">
                <div class="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <i class="fas fa-cogs text-brand-primary text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-4 text-gray-900">맞춤형 보안 설계</h3>
                <p class="text-gray-600">기업 특성과 규제에 맞는 최적의 보안 정책 수립</p>
              </div>
              <div class="bg-white shadow-lg rounded-2xl p-8 transform hover:-translate-y-1 transition-transform duration-300">
                <div class="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <i class="fas fa-chart-line text-brand-primary text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-4 text-gray-900">지속적 모니터링</h3>
                <p class="text-gray-600">실시간 보안 위협 감지와 대응 체계 구축</p>
              </div>
            </div>
            <div class="flex justify-center gap-4">
              <a href="/contact" class="btn bg-brand-primary hover:bg-brand-dark text-white btn-lg px-12 shadow-lg">문의하기</a>
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
  
    section {
      scroll-snap-align: start;
    }
  
    :global(html) {
      scroll-behavior: smooth;
    }
  </style>
  