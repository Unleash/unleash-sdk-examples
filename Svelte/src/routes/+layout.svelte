<script>
	import './styles.css';
	import { FlagProvider } from '@unleash/proxy-client-svelte';

	const config = {
		url: 'https://app.unleash-hosted.com/demo/api/frontend',
		clientKey:
			'proxy-client-svelte:development.f7d5c2f3633769afea4eadecd6bf46194dccec9c75170930c76ab4f0',
		refreshInterval: 2,
		appName: 'proxy-client-svelte'
	};
</script>

<div class="app">
	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
