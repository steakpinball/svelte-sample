<script lang="ts">
    import type { IndividualPokemon } from "./types/Pokemon";

    let pokemon: IndividualPokemon[] = [
      { name: 'Squirtle', hp: 5, max: 100 },
      { name: 'Pikachu', hp: 50, max: 50 },
      { name: 'Eevee', hp: 9001, max: 9001 },
    ];

    let name: string, hp: number, max: number;

    function add() {
        pokemon = pokemon.concat([{ name, hp: hp ?? max, max }]);
    }

    function remove(individual: IndividualPokemon) {
        pokemon = pokemon.filter(p => p != individual);
    }
</script>

<form on:submit|preventDefault={add}>
    <input bind:value={name}>
    <input type="number" bind:value={max}>
    <input type="range" min="0" {max} bind:value={hp}>
    <button>Add</button>
</form>

<main>
    {#each pokemon as p}
        <div>
            <span>{p.name}</span>
            <progress max="{p.max}" value="{p.hp}">HP: {p.hp}</progress>
            <button on:click={() => remove(p)}>Release</button>
        </div>
    {:else}
        <p>There are no pokémon.</p>
    {/each}
</main>

<style>
    progress {
        appearance: none;
    }

    form {
        align-items: center;
        display: flex;
        gap: 0.5ch;
        margin-block-end: 1em;
    }

    main {
        display: grid;
        gap: 1em;
        width: max-content;
    }

    div {
        display: flex;
        gap: inherit;
        align-items: center;
    }

    span {
        flex-grow: 1;
    }

    button {
        margin: 0;
    }
</style>