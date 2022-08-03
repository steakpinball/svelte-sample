<script lang="ts">
    import WeatherPoint from "./WeatherPoint.svelte";

    let locating: Promise<PointGeo>;
    
    async function fetchWeather(position: GeolocationPosition): Promise<PointGeo> {
        const response = await fetch(encodeURI(`https://api.weather.gov/points/${position.coords.latitude},${position.coords.longitude}`));
        return await response.json();
    }

    function locate() {
        const geo = navigator.geolocation;
        geo.getCurrentPosition((position) => locating = fetchWeather(position));
    }
</script>

<button on:click={locate}>Locate</button>

{#if locating}
    {#await locating}
        <p>Locating</p>
    {:then pointGeo}
        <WeatherPoint {pointGeo}></WeatherPoint>
    {:catch}
        <p>There was a problem finding your weather station. Please try again.</p>
    {/await}
{/if}