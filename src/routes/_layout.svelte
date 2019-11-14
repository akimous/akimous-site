<script>
	import Nav from '../components/Nav.svelte'

	export let segment
</script>

<style>
	main {
		position: relative;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
	}
    
    footer {
        padding: 1rem;
        text-align: center;
        color: #777;
    }
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>


<footer>Copyright © 2019 Yu-Ann Chen. All Rights Reserved</footer>