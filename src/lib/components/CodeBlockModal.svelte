<script lang="ts">
	import { Button, CodeBlock, Modal, getModal } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';

	interface CodeBlockDetails {
		codeTitle: string;
		code: string;
		lang: string;
	}

	export let codeBlocks: CodeBlockDetails[];
	export let id: string;
	export let codeBlockType: 'transaction' | 'script';
</script>

<Button on:click={() => getModal(id).open()} type="transparent" size="x-small">
	<Icon icon="tabler:code" />
	{`View ${codeBlockType}`}</Button
>
<div class="small">
	<Modal {id}>
		<slot />
		<div class="flex">
			{#each codeBlocks as { code, lang, codeTitle }}
				<CodeBlock {code} {lang} {codeTitle} />
			{/each}
		</div>
	</Modal>
</div>

<style lang="scss">
	.flex {
		display: flex;
		justify-content: center;
		gap: var(--space-5);
	}

	.small {
		max-width: 80vw;
		overflow-x: scroll;
	}
</style>
