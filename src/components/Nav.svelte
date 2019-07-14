<script>
	export let segment;

</script>

<style>
	nav {
		border-bottom: .07rem solid rgba(0, 48, 133, 0.1);
		font-weight: 300;
		padding: 0 1rem;
		height: 3.5rem;
	}

	.home {
		position: relative;
		width: 8rem;
		height: 2.5rem;
		background-repeat: no-repeat;
		background-size: 5rem 2.5rem;
		background-position: 0 .5rem;

		padding-left: 5rem;
		font-family: Saira;
		font-size: 2rem;
		padding-top: .4rem;
		color: var(--primary1);

		user-select: none;
		cursor: default;
	}

	ul {
		position: absolute;
		margin: 0;
		top: 0;
		right: 3rem;
		font-family: Saira;
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

<nav>
	<a class="home" href="." style="background-image:url(logo.svg)">Akimous</a>
	<ul>
		<li><a rel=prefetch class:selected="{!segment}" href='.'>Home</a></li>
		<li><a rel=prefetch class:selected="{segment === 'start'}" href='start'>Getting Started</a></li>
		<li><a href='.'>GitHub</a></li>
	</ul>
</nav>
