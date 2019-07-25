<div class="feature-container">
	<div class="description">
		<h1>Linter and Beautifier Integration</h1>
		<p>
			Akimous integrates with tools like Pyflakes and Pylints to capture potential problems in your code. A spell checker is also built-in. All warnings are displayed in the linter panel without bothering you in the code editor.
		</p>
		<p>
			YAPF and isort are automatically executed to beautify the code when you save it.
		</p>
	</div>
	<div bind:this={glide} class="glide">
		<div class="glide__track" data-glide-el="track">
			<ul class="glide__slides">
				<li class="glide__slide"><img src="img/linter1.png" importance="low" alt=""></li>
				<li class="glide__slide"><img src="img/linter2.png" importance="low" alt=""></li>
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
		background-color: #FAFFF2;
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
