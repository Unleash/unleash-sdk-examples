<script lang="ts">
	import { useFlag, useFlagsStatus } from '@unleash/proxy-client-svelte';

	const enabled = useFlag('example-flag');
	const { flagsReady } = useFlagsStatus();
</script>

<section>
	{#if !$flagsReady}
		<p>Loading...</p>
	{:else}
		{#if $enabled}
			<p>Feature is enabled!</p>
		{:else}
			<p>Feature is disabled!</p>
		{/if}
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
