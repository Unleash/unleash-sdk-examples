<script>
	import './styles.css';
	import { FlagProvider } from '@unleash/proxy-client-svelte';

	const config = {
		url: 'https://app.unleash-hosted.com/demo/api/frontend',
		clientKey: 'demo-app:dev.95ae66ab673bf467facb68b2487904f4891064d26b47e89ca498063d',
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
