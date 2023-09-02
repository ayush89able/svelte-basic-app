<script>
    export let count = 0
    export let average = 0
</script>

<div class="stats">
    <h4>{count} Reviews</h4>
    {#if count > 0}
    <h4>{average} Average Rating</h4>
    {:else}
    <h4>No rating</h4>
    {/if}
</div>

<style>
    .stats {
        max-width: 800px;
        margin: 0px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>