<script lang="ts">
    import WeatherForecast from './WeatherForecast.svelte';

    export let pointGeo: PointGeo;

    let loader: Promise<GridpointForecastGeo>;

    async function fetchForecast(): Promise<GridpointForecastGeo> {
        const response = await fetch(pointGeo.properties.forecast);
        return await response.json();
    }

    function loadForecast() {
        loader = fetchForecast();
    }

    loadForecast();
</script>

<span>Forecast for {pointGeo.properties.relativeLocation.properties.city}, {pointGeo.properties.relativeLocation.properties.state}</span>
<button on:click={loadForecast}>Reload</button>

{#await loader}
    <p>Loading forecast</p>
{:then forecast}
    <div>
        {#each forecast.properties.periods as period (period.startTime)}
            <WeatherForecast {period}></WeatherForecast>
        {/each}
    </div>
{:catch}
    <p>There was a problem loading your forecast.</p>
{/await}

<style>
    div {
        display: grid;
        gap: 1em;
    }
</style>
