<script lang="ts">
  import { onMount } from 'svelte';
  import { setupScrollAnimation } from '$lib/utils/animations';
  import '$lib/styles/animations.css';

  let formData = {
    name: '',
    email: '',
    company: '',
    type: '문의 유형 선택',
    message: ''
  };

  onMount(() => {
    return setupScrollAnimation();
  });

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    // TODO: 실제 이메일 전송 로직 구현
    console.log('Form submitted:', formData);
    alert('문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.');
  };
</script>

<div class="pt-16">
  <!-- Hero Section -->
  <section class="relative overflow-hidden py-20">
    <!-- Background with brand gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-brand-darker via-brand-dark to-brand-primary/30"></div>
    
    <!-- Animated background elements -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-20 left-20 w-64 h-64 bg-brand-primary rounded-full filter blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-20 w-64 h-64 bg-brand-light rounded-full filter blur-3xl animate-pulse"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center text-white">
        <h1 class="text-5xl font-bold mb-6">Partnership & Contact</h1>
        <p class="text-xl text-brand-lighter">AI 보안 솔루션 도입 및 제휴 문의를 환영합니다</p>
      </div>
    </div>
  </section>

  <!-- Benefits Section -->
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
        <div class="text-center">
          <div class="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-shield-alt text-brand-primary text-2xl"></i>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">강력한 보안</h3>
          <p class="text-gray-600">실시간 모니터링과 자동화된 위협 차단으로 AI 서비스를 안전하게 보호</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-bolt text-brand-primary text-2xl"></i>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">빠른 적용</h3>
          <p class="text-gray-600">간단한 API 연동으로 즉시 적용 가능한 솔루션</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-handshake text-brand-primary text-2xl"></i>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">맞춤 지원</h3>
          <p class="text-gray-600">전문 기술지원팀의 신속한 응대와 맞춤형 컨설팅</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto">
        <div class="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-8">문의하기</h2>
          <form on:submit={handleSubmit} class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">이름 *</label>
                <input
                  type="text"
                  id="name"
                  bind:value={formData.name}
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="홍길동"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">이메일 *</label>
                <input
                  type="email"
                  id="email"
                  bind:value={formData.email}
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="company" class="block text-sm font-medium text-gray-700 mb-2">회사명</label>
                <input
                  type="text"
                  id="company"
                  bind:value={formData.company}
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="회사명을 입력해주세요"
                />
              </div>
              <div>
                <label for="type" class="block text-sm font-medium text-gray-700 mb-2">문의 유형 *</label>
                <select
                  id="type"
                  bind:value={formData.type}
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                >
                  <option disabled>문의 유형 선택</option>
                  <option>도입 문의</option>
                  <option>제휴 제안</option>
                  <option>기술 지원</option>
                  <option>기타 문의</option>
                </select>
              </div>
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">문의 내용 *</label>
              <textarea
                id="message"
                bind:value={formData.message}
                required
                rows="6"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                placeholder="문의하실 내용을 입력해주세요"
              ></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                class="w-full px-8 py-3 bg-brand-primary hover:bg-brand-dark text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                문의하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  /* 기존 애니메이션 스타일 유지 */
</style> 