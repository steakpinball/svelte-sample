<script lang="ts">
	import Counter from "./Counter.svelte";
	import Owl from "./Owl.svelte";
	import Weather from "./Weather.svelte";
	import TabButton from "./TabButton.svelte";
	import Pokemon from "./Pokemon.svelte";
	import Await from "./Await.svelte";

	import { activeTab } from './stores';
import RandomPokemon from "./RandomPokemon.svelte";
</script>

<header>
	<TabButton tab={'count'}>Compnent</TabButton>
	<TabButton tab={'control'}>Branching</TabButton>
	<TabButton tab={'randompokemon'}>Looping</TabButton>
	<TabButton tab={'await'}>Await</TabButton>
	<TabButton tab={'weather'}>Properties</TabButton>
	<TabButton tab={'pokemon'}>Binding</TabButton>
</header>
<main>
	{#if $activeTab == 'count'}
		<Counter></Counter>
	{:else if $activeTab == 'control'}
		<Owl></Owl>
	{:else if $activeTab == 'randompokemon'}
		<RandomPokemon></RandomPokemon>
	{:else if $activeTab == 'pokemon'}
		<Pokemon></Pokemon>
	{:else if $activeTab == 'await'}
		<Await></Await>
	{:else if $activeTab == 'weather'}
		<Weather></Weather>
	{/if}
</main>
