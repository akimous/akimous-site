<Hero></Hero>
<Prediction></Prediction>
{#if ready}
<ExtraPrediction></ExtraPrediction>
<Documentation></Documentation>
<LayeredKeyboardControl></LayeredKeyboardControl>
<RealtimeFormatter></RealtimeFormatter>
<Console></Console>
<Macro></Macro>
<LinterIntegration></LinterIntegration>
{/if}

<script>
    import { onMount, tick } from 'svelte'
    
	import Hero from '../features/Hero.svelte'
	import Prediction from '../features/Prediction.svelte'
	import ExtraPrediction from '../features/ExtraPrediction.svelte'
	import Documentation from '../features/Documentation.svelte'
	import LayeredKeyboardControl from '../features/LayeredKeyboardControl.svelte'
	import RealtimeFormatter from '../features/RealtimeFormatter.svelte'
	import Console from '../features/Console.svelte'
	import Macro from '../features/Macro.svelte'
	import LinterIntegration from '../features/LinterIntegration.svelte'
    
    export let ready = false
    
    onMount(async () => {
		await tick()
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                ready = true
            })
        })
	})
</script>