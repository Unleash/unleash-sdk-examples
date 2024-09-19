<script>

	// import { useFlag, useFlagsStatus, useVariant } from '@unleash/proxy-client-svelte';

	// const enabled = useFlag('svelte-test-feature');
	// const variant = useVariant('svelte-test-feature');
	// const { flagsReady } = useFlagsStatus();

	// $: if ($flagsReady) console.table({ $enabled, $variant });
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
