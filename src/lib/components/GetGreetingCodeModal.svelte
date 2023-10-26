<script lang="ts">
	import getGreeting from '$lib/flow/actions/getGreeting?raw';
	import CodeBlockModal from './CodeBlockModal.svelte';
	import getGreetingScript from '$lib/flow/cadence/scripts/getGreeting.cdc?raw';

	const codeBlocks = [
		{
			codeTitle: 'getGreeting.ts',
			code: `${getGreeting}`,
			lang: 'javascript'
		},
		{
			codeTitle: 'getGreeting.cdc',
			code: `${getGreetingScript}`,
			lang: 'cadence'
		}
	];
</script>

<CodeBlockModal id="get-greeting-transaction" {codeBlocks} codeBlockType="script">
	<div class="column-2">
		<h3 class="large"><strong>getGreeting</strong> script</h3>
		<p class="small">This is the FCL code that fetches the greeting from our contract.</p>
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
