<div class="feature-container">
	<div class="description">
		<h1>Interactive Console</h1>
		<p>
			The built-in console operates in different modes, you can choose whatever fits your need:
		</p>
		<ul>
			<li>Script: Run currently focused document as a Python script or module.</li>
			<li>Shell: Run any command just like you're in the shell.</li>
			<li>
				IPython: Run selected lines as a code cell in a Jupyter notebook. 
				Or optionally, automatically evaluate the whole (short) script as you type 
				(a.k.a. playground mode, good for expirementing or for solving a programming compitition problem).
			</li>
		</ul>
	</div>
	<video bind:this={video} autoplay muted loop playsinline src="img/console.mp4">
		Sorry, your browser doesn't support embedded videos.
	</video>
</div>



<style>
	.feature-container {
		background-color: #EDF8FF;
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
