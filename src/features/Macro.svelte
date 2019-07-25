<div class="feature-container">
	<video bind:this={video} autoplay muted loop playsinline src="img/macro.mp4">
		Sorry, your browser doesn't support embedded videos.
	</video>
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

</div>



<style>
	.feature-container {
		background-color: #FFF7FC;
	}

</style>


<script>
	import { onMount } from 'svelte'

	let video
	onMount(() => {
		setTimeout(() => {
			video.play()
		}, 5000)
	})

</script>
