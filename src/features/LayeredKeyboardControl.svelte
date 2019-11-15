<div class="feature-container">
	<div class="description">
		<h1>Layered Keyboard Control</h1>
		<p>
			Programmers love Vim for its sheer efficiency. However, it does come with some drawbacks:
		</p>
		<ul>
			<li>
				User have to constantly switching between normal mode and insert mode. 
				People even made some <a href="https://github.com/alevchuk/vim-clutch">gadget</a> to deal with it.
			</li>
			<li>
				Because it mixes positional (h, j, k, l for moving cursor) and semantic (most of other commands) key bindings, 
				Vim can be awkward to use for non-Qwerty keyboard users.
			</li>
		</ul>
		<p>
			We have a better solution for this. 
			Inspired by programmable keyboards, 
			a control layer sits above the ordinary alphabatical layer. 
			To activate the control layer, 
			just hold the easiest reachable key on the keyboard, the space bar, 
			and tap on other keys with some command binding.
		</p>
		<p>
			The default key binding of the control layer is fully positional (layout invariant) 
			and easy to remember. 
			An on screen cheatsheet is also provided for quick reference.
		</p>
	</div>
	<video bind:this={video} autoplay muted loop playsinline src="img/layeredKeyboardControl.mp4">
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
