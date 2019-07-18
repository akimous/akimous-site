<div class="feature-container">
	<video bind:this={video} autoplay loop src="img/extraPrediction.mp4">
		Sorry, your browser doesn't support embedded videos.
	</video>
	<div class="description">
		<h1>NLP-assisted Completion</h1>
		<p>
			Most IDEs only complete known token as you type. With the help of a big dictionary and some natural language processing, Akimous can save you a few keystrokes even if you are defining a new variable. When there's no match returned from auto-completion, variable names from the dictionary are suggested.
		</p>
		<p>
			If you are defining a variable name with multiple words, just keep typing. Akimous will automatically turn the long string of characters into a snake_case variable/function name or a CamelCase class name.
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
			})
		}, 3000)
</script>