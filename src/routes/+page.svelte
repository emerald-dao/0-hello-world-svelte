<script type="ts">
	import dappData from '$lib/config/dappData';
	import changeGreeting from '$lib/flow/actions/changeGreeting';
	import getGreeting from '$lib/flow/actions/getGreeting';
	import executeTransaction from '$lib/flow/utils/executeTransaction';
	import { Button } from '@emerald-dao/component-library';

	let newGreeting: string;
	let greeting: string;

	const handleGetGreeting = async () => {
		greeting = await getGreeting();
	};
</script>

<section class="container-small">
	<h1>{dappData.title}</h1>
	<Button on:click={handleGetGreeting}>Get greeting</Button>
	<div class="card">
		<p>Current greeting:</p>
		<p>{greeting}</p>
	</div>
	<textarea bind:value={newGreeting} />
	<Button on:click={() => executeTransaction(() => changeGreeting(newGreeting))}
		>Change greeting</Button
	>
</section>

<style type="scss">
	section {
		min-height: 50vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-3);

		h1 {
			text-align: center;
			color: var(--clr-primary-main);
		}
	}
</style>
