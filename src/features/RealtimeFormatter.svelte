<div class="feature-container">
	<div class="description">
		<h1>Real-time Formatter</h1>
		<p>
			IDEs usually come with a code formatter/beautifier, to make your code comply with certain styles. 
			Akimous takes it a step further, letting this to happen as you type. 
			The real-time formatter automatically adds spaces to where needed, e.g. around operators and after commas. 
			You'll save a few key strokes for each line of code you write.
		</p>
		<p>
			For more complex formatting, YAPF can be optionally triggered on save. 
		</p>
	</div>
	<video bind:this={video} autoplay muted loop playsinline src="img/realtimeFormatter.mp4">
		Sorry, your browser doesn't support embedded videos.
	</video>
</div>



<style>
	.feature-container {
		background-color: #F7FAF2;
	}

</style>


<script>
	import { onMount } from 'svelte'

	let video
	onMount(() => {
		setTimeout(() => {
			video.play()
		}, 3000)
	})

</script>
