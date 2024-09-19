<script>
	import './styles.css';
	import { FlagProvider } from '@unleash/proxy-client-svelte';

	const config = {
		url: 'https://app.unleash-hosted.com/demo/api/frontend',
		clientKey: 'codesandbox:dev.b32907f5ced021c0443ad770b371c81191683c96e6ae8e003876d509',
		refreshInterval: 5,
		metricsInterval: 5,
		appName: 'codesandbox-svelte'
	};
</script>

<div class="app">
	<FlagProvider {config}>
		<main>
			<slot />
		</main>
	</FlagProvider>
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
</style>
