<script type="ts">
	import GetGreetingCodeModal from './../lib/components/GetGreetingCodeModal.svelte';
	import { Button } from '@emerald-dao/component-library';
	import * as Card from '$lib/components/Card';
	import changeGreeting from '$lib/flow/actions/changeGreeting';
	import getGreeting from '$lib/flow/actions/getGreeting';
	import executeTransaction from '$lib/flow/utils/executeTransaction';
	import GreetingWrapper from '$lib/components/GreetingWrapper.svelte';
	import ChangeGreetingCodeModal from '$lib/components/ChangeGreetingCodeModal.svelte';

	let newGreeting: string;
	let greeting: string;

	const handleGetGreeting = async () => {
		greeting = await getGreeting();
	};

	const handleChangeGreeting = () => {
		executeTransaction(() => changeGreeting(newGreeting));
	};
</script>

<Card.Root maxWidth="40ch">
	<Card.Section>
		<span class="w-medium small">Greeting DApp</span>
	</Card.Section>
	<Card.Section>
		<span class="w-medium small">1. Change your Greeting</span>
		<span class="small"
			>Insert the new greeting in the textarea and then execute the transaction to save your new
			message in the Flow Blockchain.</span
		>
		<textarea bind:value={newGreeting} placeholder="Insert your new greeting..." rows="3" />
		<div class="row-2">
			<Button size="small" on:click={handleChangeGreeting}>Change greeting</Button>
			<ChangeGreetingCodeModal />
		</div>
	</Card.Section>
	<Card.Section>
		<span class="w-medium small">2. Read your Greeting</span>
		<span class="small">Run a script to read your greeting from the Flow Blockchain.</span>
		<div class="row-2">
			<Button size="small" on:click={handleGetGreeting}>Get greeting</Button>
			<GetGreetingCodeModal />
		</div>
		<GreetingWrapper {greeting} />
	</Card.Section>
</Card.Root>
