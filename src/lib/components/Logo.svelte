<script lang="ts">
  import logo from '$lib/assets/logo.svg';
  let className = '';
  export { className as class };
</script>

<img 
  src={logo}
  alt="DDD Logo" 
  class={`h-12 w-auto ${className}`}
/>

<style>
  img {
    object-fit: contain;
  }
</style> 