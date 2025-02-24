<script lang="ts">
  import { page } from '$app/stores';
  import Logo from './Logo.svelte';
  let isOpen = false;
  const toggleMenu = () => isOpen = !isOpen;
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-darker/10">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      <!-- Logo section -->
      <a href="/" class="flex items-center">
        <Logo class="h-10 w-auto" />
      </a>

      <!-- Navigation links -->
      <div class="hidden md:flex items-center space-x-8">
        <a 
          href="/" 
          class="text-brand-darker hover:text-brand-primary transition-colors font-medium
          {$page.url.pathname === '/' ? 'text-brand-primary' : ''}"
        >
          HOME
        </a>
        <a 
          href="/ddd" 
          class="text-brand-darker hover:text-brand-primary transition-colors font-medium
          {$page.url.pathname === '/ddd' ? 'text-brand-primary' : ''}"
        >
          DDD(DontDoDan)
        </a>
        <a 
          href="/dan" 
          class="text-brand-darker hover:text-brand-primary transition-colors font-medium
          {$page.url.pathname === '/dan' ? 'text-brand-primary' : ''}"
        >
          DAN(DoAnythingNow)
        </a>
        <a 
          href="/contact" 
          class="text-brand-darker hover:text-brand-primary transition-colors font-medium
          {$page.url.pathname === '/contact' ? 'text-brand-primary' : ''}"
        >
          Contact US
        </a>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button 
          on:click={toggleMenu} 
          class="p-2 text-brand-darker hover:text-brand-primary transition-colors"
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          <i class="fas {isOpen ? 'fa-times' : 'fa-bars'} text-xl"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if isOpen}
    <div class="md:hidden bg-white border-t border-brand-darker/10">
      <div class="container mx-auto px-4 py-4 space-y-4">
        <a 
          href="/" 
          class="block px-4 py-2 text-brand-darker hover:text-brand-primary transition-colors
          {$page.url.pathname === '/' ? 'text-brand-primary' : ''}"
        >
          홈
        </a>
        <a 
          href="/ddd" 
          class="block px-4 py-2 text-brand-darker hover:text-brand-primary transition-colors
          {$page.url.pathname === '/ddd' ? 'text-brand-primary' : ''}"
        >
          DDD
        </a>
        <a 
          href="/dan" 
          class="block px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors
          {$page.url.pathname === '/dan' ? 'text-gray-900' : ''}"
        >
          DAN
        </a>
        <a 
          href="/contact" 
          class="block px-4 py-2 text-gray-900 hover:text-gray-700 transition-colors font-medium"
        >
          Contact US
        </a>
      </div>
    </div>
  {/if}
</nav> 