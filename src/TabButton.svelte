<script lang="ts">
    import { activeTab } from "./stores";

    export let tab: string;

    function gotoTab() {
        $activeTab = tab;
    }
</script>

<button class:active={$activeTab == tab} on:click={gotoTab}><slot>Tab</slot></button>

<style>
    .active {
		background-color: black;
		color: white;
	}
</style>