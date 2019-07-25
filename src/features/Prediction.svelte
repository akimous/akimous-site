<div class="container">
	<div class="description">
		<h1>Auto Completion</h1>
		<p>
			Akimous has a built-in completion engine based on Jedi for Python language. 
			What sets the engine apart from competitors' is that it uses machine learning to predict the likelihood of a token being present at cursor position. 
		</p>
		<p>
			The predictor collect information about tokens suggested by Jedi 
			(e.g. the popularity of the token in public repositories) 
			as well as the surrounding context 
			(e.g. how similar is the function name to the variable name). 
			The completion engine in Akimous is designed to be simple enough that it will not drain your battery nor slow down input.
		</p>
	</div>
	<img src="img/completion.png" alt="">
</div>



<style>
	.container {
		background-color: #FFF7FC;
		padding: 2rem 0;
	}
	
	img {
		border-radius: 0;
		width: 100%;
	}
	
	.description {
		padding-bottom: 1rem;	
	}
	
	@media (min-width: 600px) {
		.description {
			width: 70vw;
			margin: 0 auto;
		}
		
		img {
			width: 70vw;
			margin: 0 auto;
			display: block;
		}
	}

</style>

