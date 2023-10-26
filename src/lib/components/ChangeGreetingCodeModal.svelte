<script lang="ts">
	import changeGreeting from '$lib/flow/actions/changeGreeting?raw';
	import CodeBlockModal from './CodeBlockModal.svelte';
	import changeGreetingTx from '$lib/flow/cadence/transactions/changeGreeting.cdc?raw';

	const codeBlocks = [
		{
			codeTitle: 'changeGreeting.ts',
			code: `${changeGreeting}`,
			lang: 'javascript'
		},
		{
			codeTitle: 'changeGreeting.cdc',
			code: `${changeGreetingTx}`,
			lang: 'cadence'
		}
	];
</script>

<CodeBlockModal id="change-greeting-transaction" {codeBlocks} codeBlockType="transaction">
	<div class="column-2">
		<h3><strong>changeGreeting</strong> transaction</h3>
		<p class="small">This is the FCL code that runs a transaction to change our greeting.</p>
	</div>
</CodeBlockModal>

<style lang="scss">
	div {
		padding-bottom: var(--space-6);
		position: sticky;
		top: 0;
		background-color: var(--clr-surface-secondary);
		z-index: 1;

		h3 {
			font-size: var(--font-size-3);
		}
	}
</style>
