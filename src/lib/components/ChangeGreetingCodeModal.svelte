<script lang="ts">
	import changeGreeting from '$lib/flow/actions/changeGreeting';
	import CodeBlockModal from './CodeBlockModal.svelte';
</script>

<CodeBlockModal
	id="change-greeting-transaction"
	codeBlock={`${changeGreeting}`}
	codeBlockType="transaction"
>
	<div class="column-2">
		<span><strong>changeGreeting</strong> transaction</span>
		<p class="small">
			This is a simple exmplanation of what this transaction does. Put any detail you want.
		</p>
	</div>
</CodeBlockModal>
