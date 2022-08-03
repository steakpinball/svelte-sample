<script>
    let maybe = false;
</script>

<h2>How to draw an owl</h2>
<label>Show? <input type="checkbox" bind:checked={maybe} /></label>

{#if maybe}
    <ol>
        <li>Draw two circles</li>
        <li>Draw the rest of the owl</li>
    </ol>
{:else}
    <p>You are not privy.</p>
{/if}
  