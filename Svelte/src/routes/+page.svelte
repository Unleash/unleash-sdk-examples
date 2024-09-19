<script lang="ts">
	import { useFlag, useFlagsStatus } from '@unleash/proxy-client-svelte';

	const enabled = useFlag('example-flag');
	const { flagsReady } = useFlagsStatus();
</script>

<section>
	{#if !$flagsReady}
		<p>Loading...</p>
	{:else}
		<p>
			{$enabled ? 'Feature is enabled!' : 'Feature is disabled!'}
		</p>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
