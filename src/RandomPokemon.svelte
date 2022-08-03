<script lang="ts">
    import type { IndividualPokemon } from "./types/Pokemon";

    let pokemon: IndividualPokemon[] = [
        { name: 'Squirtle', hp: 5, max: 100 },
        { name: 'Pikachu', hp: 50, max: 50 },
        { name: 'Eevee', hp: 9001, max: 9001 },
    ];

    const wild = ['Rattata', 'Pidgey'];
</script>

<button on:click={() => pokemon = pokemon.concat([{ name: wild[Math.floor(Math.random() * wild.length)], hp: 4, max: 5}])}>Catch pokémon</button>
<button on:click={() => { if (0 < pokemon.length) --pokemon.length }}>Release last pokémon</button>

<div>
    {#each pokemon as p, index}
        <span>{index + 1}.</span>
        <span>{p.name}</span>
        <progress max={p.max} value={p.hp}>HP: {p.hp}</progress>
    {:else}
        <p>There are no pokémon.</p>
    {/each}
</div>
        
<style>
    div {
        display: grid;
        gap: 1ch;
        grid-template-columns: repeat(3, max-content);
    }

    p {
        grid-column: 1 / 4;
    }
</style>