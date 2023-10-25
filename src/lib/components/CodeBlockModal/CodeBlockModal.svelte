<script lang="ts">
	import { Button, Modal, getModal } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';

	export let codeBlock: string;
	export let id: string;
	export let codeBlockType: 'transaction' | 'script';
</script>

<Button on:click={() => getModal(id).open()} type="transparent" size="x-small">
	<Icon icon="tabler:code" />
	{`View ${codeBlockType}`}</Button
>
<Modal {id}>
	<code>
		<pre>
			{`${codeBlock}`}
		</pre>
	</code>
</Modal>
