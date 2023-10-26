<script lang="ts">
	export let greeting: string | undefined = undefined;
</script>

<div class="greeting-wrapper">
	<span class="small w-medium">Current Greeting:</span>
	{#if greeting}
		<span class="small">{greeting}</span>
	{:else}
		<span class="small">No greeting yet</span>
	{/if}
</div>

<style lang="scss">
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
