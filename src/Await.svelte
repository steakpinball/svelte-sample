<script lang="ts">
    import type { LocalForecast } from "./lib/LocalWeather";
    import { getSingleLocalWeather } from "./lib/LocalWeather";
    import { delay } from "./lib/Util";

    let localForecast = getLocalForecast();

    async function getLocalForecast(): Promise<LocalForecast> {
        await delay(4000);
        if (Math.random() < 0.5)
            throw new Error('Quantum AI model failed to run');
        return getSingleLocalWeather();
    }
</script>

<button on:click={() => localForecast = getLocalForecast()}>Retry</button>

{#await localForecast}
    <p>Loading...</p>
{:then condition}
    <div>
        <h3>{new Date(condition.date).toLocaleString(undefined, { weekday: 'long' })}</h3>
        <span>{condition.temperatureF}&deg;F</span><span>{condition.summary}</span>
    </div>
{:catch error}
    <p>There was an error loading local forecast. Please retry.</p>
    <p>{error.toString()}</p>
{/await}

<style>
    span {
        margin: 0 1em;
    }
</style>