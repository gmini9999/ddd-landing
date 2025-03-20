<script lang="ts">
	import '../app.css';
	import Navigation from "$lib/components/Navigation.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import { page } from '$app/stores';
	import Alert from '$lib/components/Alert.svelte';
</script>

<svelte:head>
	<title>{$page.data.meta?.title || '회사명'}</title>
	{#if $page.data.meta?.description}
		<meta name="description" content={$page.data.meta.description} />
	{/if}
</svelte:head>

<div class="flex flex-col min-h-screen">
	<Navigation />
	<main class="flex-grow">
		<slot />
	</main>
	<Footer />
	<Alert />
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
