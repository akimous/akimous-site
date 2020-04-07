<nav id="nav">
	<a class="home" href="." aria-label="home">
		<img id="logo" src="logo.svg" alt="logo"><span>Akimous</span>
	</a>
	<ul>
		<li><a rel=prefetch class:selected="{!segment}" href='.' aria-label="home">Home</a></li>
		<li><a rel=prefetch class:selected="{segment === 'start'}" href='start' aria-label="getting started">Getting Started</a></li>
        <!-- <li><a rel=prefetch class:selected="{isDoc(segment)}" href='docs/introduction' aria-label="documentation">Docs</a></li>-->
		<li><a href='https://github.com/akimous/akimous' aria-label="github"><i class="fab fa-github fa-2x"></i></a></li>
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
		
	@media (max-width: 700px) {
		.home {
			padding-left: 0;
			font-size: 1.5rem;
		}
		
		ul {
			right: 0;
		}
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
		height: .2rem;
		background-color: var(--primary2);
		display: block;
		bottom: 0;
        z-index: -100;
	}

	a {
		text-decoration: none;
		padding: 0 0.5rem;
		display: block;
		vertical-align: middle;
        overflow-y: hidden;
	}
    
    .fab {
        vertical-align: middle;
        color: #555;
    }

</style>


<script>
	export let segment

    // function isDoc(segment) {
    // return segment && segment.startsWith('docs')
    // }
</script>