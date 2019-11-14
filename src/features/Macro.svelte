<div class="feature-container">
	<div class="description">
		<h1>Macros</h1>
		<p>
			Developers spend a lot of time printing/logging something, 
			entering debugger or adding/removing pieces of code repetitively to diagnose issues. 
			Those actions deserve to be automated.
		</p>
		<p>
			Macro function in Akimous exposes Javascript CodeMirror API of the editor. 
			You can program it to do whatever tasks you want, 
			without learning a DSL or being limited by the IDE GUI.
		</p>
	</div>
	<video bind:this={video} autoplay muted loop playsinline src="img/macro.mp4">
		Sorry, your browser doesn't support embedded videos.
	</video>
</div>



<style>
	.feature-container {
		background-color: #FFF7FC;
	}

</style>


<script>
	import { onMount } from 'svelte'
    import { autoPlay } from '../utils'

    let video
    onMount(() => {
        autoPlay(video)
    })

</script>
