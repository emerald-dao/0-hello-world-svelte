<script lang="ts">
	import getGreeting from '$lib/flow/actions/getGreeting';
	import CodeBlockModal from './CodeBlockModal.svelte';
</script>

<CodeBlockModal id="get-greeting-transaction" codeBlock={`${getGreeting}`} codeBlockType="script">
	<div class="column-2">
		<span><strong>getGreeting</strong> script</span>
		<p class="small">
			This is a simple exmplanation of what this script does. Put any detail you want.
		</p>
	</div>
</CodeBlockModal>
