<div class="feature-container">
    <div class="description">
        <h1>NLP-assisted Completion</h1>
        <p>
            Most IDEs only complete known token as you type. With the help of a big dictionary and some natural language processing, Akimous can save you a few keystrokes even if you are defining a new variable. When there's no match returned from auto-completion, variable names from the dictionary are suggested.
        </p>
        <p>
            If you are defining a variable name with multiple words, just keep typing. Akimous will automatically turn the long string of characters into a snake_case variable/function name or a CamelCase class name.
        </p>
    </div>
    <video bind:this={video} muted loop playsinline src="img/extraPrediction.mp4">
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
    import { autoPlay } from '../utils'

    let video
    onMount(() => {
        autoPlay(video)
    })

</script>
