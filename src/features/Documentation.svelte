<div class="feature-container">
	<div class="description">
		<h1>Rendered Documentation</h1>
		<p>
			Akimous provides function documentation beautifully rendered by Sphinx. The documentation panel retrieve docstrings (reStructuredText or text) in any library, saving you from looking up parameter definition and examples in another browser tab. 
		</p>
		<p>
			Moreover, the current parameter at your cursor is automatically highlighted, so that you don't have to search in a long list of parameters to find it. To insert a parameters, just hold command/control key and click on it.
		</p>
	</div>

	<div bind:this={glide} class="glide">
		<div class="glide__track" data-glide-el="track">
			<ul class="glide__slides">
				<li class="glide__slide"><img src="img/doc1.png" alt=""></li>
				<li class="glide__slide"><img src="img/doc2.png" alt=""></li>
			</ul>
		</div>
		<div class="glide__bullets" data-glide-el="controls[nav]">
			<button class="glide__bullet" data-glide-dir="=0" aria-label="1"></button>
			<button class="glide__bullet" data-glide-dir="=1" aria-label="2"></button>
		</div>
	</div>
</div>



<style>
	.feature-container {
		background-color: #EDF8FF;
	}


</style>

<script>
	import { onMount } from 'svelte'
	import Glide from '@glidejs/glide'

	let glide
	
	onMount(() => {
		new Glide(glide, {
			autoplay: 5000,
		}).mount()
	})

</script>
