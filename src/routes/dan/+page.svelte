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
  <section class="relative overflow-hidden py-20 bg-gradient-to-br from-[#4A1818] via-[#661F1F] to-[#8B2424]">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center text-white">
        <h1 class="text-5xl font-bold mb-6">적대적 프롬프트 공격</h1>
        <p class="text-xl text-red-200">AI 모델을 위협하는 새로운 보안 위험</p>
        <p class="mt-4 text-lg text-red-100/70">DAN(Do Anything Now) 등 진화하는 AI 공격 기법과 그 대응 방안</p>
      </div>
    </div>
  </section>

  <!-- Overview Section -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="animate-on-scroll">
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 class="text-3xl font-bold mb-6 text-gray-900">DAN의 위험성</h2>
              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                ChatGPT와 같은 LLM에는 유해하거나 불법적인 콘텐츠를 제한하는 가드레일이 있습니다. 
                하지만 DAN과 같은 적대적 프롬프트 공격은 이러한 보안 장치를 우회하여 
                AI 모델이 의도하지 않은 유해한 결과를 생성하도록 만들 수 있습니다.
              </p>
              <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
                <h3 class="text-xl font-bold mb-3 text-red-700">주요 위험 요소</h3>
                <ul class="space-y-3 text-gray-700">
                  <li class="flex items-center">
                    <i class="fas fa-exclamation-triangle text-red-500 mr-3"></i>
                    <span>정책 위반 콘텐츠 생성 유도</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-exclamation-triangle text-red-500 mr-3"></i>
                    <span>민감 정보 유출 위험</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-exclamation-triangle text-red-500 mr-3"></i>
                    <span>보안 시스템 우회 가능성</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="bg-gray-900 p-8 rounded-3xl text-white relative shadow-2xl">
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
  </section>

  <!-- Attack Types Section -->
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="animate-on-scroll">
          <h2 class="text-3xl font-bold text-center mb-16 text-gray-900">주요 공격 유형</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-2xl shadow-lg">
              <div class="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-code text-red-500 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-4 text-gray-900">프롬프트 인젝션</h3>
              <p class="text-gray-600">시스템 지침을 우회하기 위해 악의적인 명령어를 삽입하는 공격</p>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-lg">
              <div class="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-unlock text-red-500 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-4 text-gray-900">자일브레이킹</h3>
              <p class="text-gray-600">AI 모델의 보안 제한을 해제하여 정책을 위반하는 출력을 유도</p>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-lg">
              <div class="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-random text-red-500 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-4 text-gray-900">토큰 혼란 유도</h3>
              <p class="text-gray-600">특수 문자와 형식 조작으로 모델의 입력 처리를 방해</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Defense Section -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="animate-on-scroll">
          <h2 class="text-3xl font-bold text-center mb-16 text-gray-900">방어 전략</h2>
          <div class="grid md:grid-cols-2 gap-12">
            <!-- 실시간 모니터링 카드 -->
            <div class="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h3 class="text-2xl font-bold mb-6 text-gray-900">실시간 모니터링</h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <i class="fas fa-shield-alt text-brand-primary mt-1 mr-3"></i>
                  <span class="text-gray-700">입력 프롬프트 실시간 검사 및 필터링</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-chart-line text-brand-primary mt-1 mr-3"></i>
                  <span class="text-gray-700">이상 패턴 감지 및 자동 차단</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-history text-brand-primary mt-1 mr-3"></i>
                  <span class="text-gray-700">공격 시도 로깅 및 분석</span>
                </li>
              </ul>
            </div>
            <!-- 정책 강화 카드 -->
            <div class="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h3 class="text-2xl font-bold mb-6 text-gray-900">정책 강화</h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <i class="fas fa-lock text-brand-primary mt-1 mr-3"></i>
                  <span class="text-gray-700">강력한 시스템 레벨 정책 적용</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-user-shield text-brand-primary mt-1 mr-3"></i>
                  <span class="text-gray-700">사용자 권한 레벨 분리</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-sync text-brand-primary mt-1 mr-3"></i>
                  <span class="text-gray-700">지속적인 보안 규칙 업데이트</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- DDD 링크 섹션 수정 -->
          <div class="mt-16 flex items-center justify-center gap-64 bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <div class="text-left">
              <h3 class="text-xl font-bold text-gray-900 mb-2">DDD(Don't Don Dan) 솔루션</h3>
              <p class="text-gray-600">
                강력한 보안 솔루션으로 AI 서비스를 안전하게 보호하세요
              </p>
            </div>
            <a 
              href="/ddd" 
              class="inline-flex items-center gap-2 px-8 py-3 bg-brand-primary hover:bg-brand-dark text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              <span>솔루션 살펴보기</span>
              <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  :global(.animate-on-scroll.show) {
    opacity: 1;
    transform: translateY(0);
  }

  section:not(:first-child) {
    opacity: 0;
    transition: opacity 0.8s ease;
  }

  :global(section:not(:first-child).show) {
    opacity: 1;
  }
</style> 