<nav>
	<a class="home" href=".">
		<img src="logo.svg" alt="logo"><span>Akimous</span>
	</a>
	<ul>
		<li><a rel=prefetch class:selected="{!segment}" href='.'>Home</a></li>
		<li><a rel=prefetch class:selected="{segment === 'start'}" href='start'>Getting Started</a></li>
		<li><a href='.'>GitHub</a></li>
	</ul>
</nav>

<style>
	nav {
		border-bottom: .07rem solid rgba(0, 48, 133, 0.1);
		font-weight: 300;
		padding: 0 1rem;
		height: 3.5rem;
		font-family: Saira;
	}

	.home {
		position: relative;
		width: 12rem;
		height: 3.5rem;
		padding-left: 5rem;
		font-size: 2rem;
		color: var(--primary1);
		user-select: none;
		cursor: default;
	}
	
	img {
		position: relative;
		height: 2.5rem;
		top: .5rem;
		padding-right: .5rem;
	}

	ul {
		position: absolute;
		margin: 0;
		top: 0;
		right: 3rem;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
		height: 3.5rem;
		line-height: 3.5rem;
	}

	.selected {
		position: relative;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - .95rem);
		height: .3rem;
		background-color: var(--primary2);
		display: block;
		bottom: -.2rem;
	}

	a {
		text-decoration: none;
		padding: 0 0.5rem;
		display: block;
		vertical-align: middle;
	}

</style>


<script>
	export let segment;

</script>