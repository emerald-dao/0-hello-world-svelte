<script type="ts">
	import { Button } from '@emerald-dao/component-library';
	import CodeBlockModal from '$lib/components/CodeBlockModal/CodeBlockModal.svelte';
	import * as Card from '$lib/components/Card';
	import changeGreeting from '$lib/flow/actions/changeGreeting';
	import getGreeting from '$lib/flow/actions/getGreeting';
	import executeTransaction from '$lib/flow/utils/executeTransaction';

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
			<CodeBlockModal
				id="change-greeting-transaction"
				codeBlock={`${changeGreeting}`}
				codeBlockType="transaction"
			/>
		</div>
	</Card.Section>
	<Card.Section>
		<span class="w-medium small">2. Read your Greeting</span>
		<span class="small">Run a script to read your greeting from the Flow Blockchain.</span>
		<div class="row-2">
			<Button size="small" on:click={handleGetGreeting}>Get greeting</Button>
			<CodeBlockModal
				id="get-greeting-transaction"
				codeBlock={`${getGreeting}`}
				codeBlockType="script"
			/>
		</div>
		<div class="greeting-wrapper">
			<span class="small w-medium">Current Greeting:</span>
			{#if greeting}
				<span class="small">{greeting}</span>
			{:else}
				<span class="small">No greeting yet</span>
			{/if}
		</div>
	</Card.Section>
</Card.Root>

<style type="scss">
	textarea {
		border-radius: var(--radius-1);
	}

	.greeting-wrapper {
		border: 1px solid var(--clr-primary-main);
		background-color: var(--clr-primary-badge);
		border-radius: var(--radius-1);
		padding: var(--space-3);

		span {
			&:first-child {
				color: var(--clr-primary-main);
			}
		}
	}
</style>
