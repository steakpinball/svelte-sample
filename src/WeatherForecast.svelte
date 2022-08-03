<script lang="ts">
    export let period: GridpointForecastPeriod;
</script>

<div>
    <h4>{period.name} - {period.temperature} &deg;{period.temperatureUnit}</h4>
    <img src="{period.icon}" alt="{period.shortForecast}"/>
    <p>{period.detailedForecast}</p>
</div>

<style>
    div {
        border-radius: 8px;
        border: 1px solid lightgray;
        padding: 1em;
        display: grid;
        grid-template: 
            "title title" min-content
            "icon description";
        gap: 2ch;
        justify-content: start;
        align-items: start;
    }
    h4 {
        margin: 0;
        grid-area: title;
    }
    img {
        grid-area: icon;
    }
    p {
        grid-area: description;
        margin: 0;
    }
</style>