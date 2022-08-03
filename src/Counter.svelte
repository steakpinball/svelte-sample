<script>
    let count = 0;
</script>

<p>Count: {count}</p>
<button on:click={() => ++count}>+</button>
<button on:click={() => --count}>-</button>

<style>
    button {
        border-radius: 4px;
    }
</style>
