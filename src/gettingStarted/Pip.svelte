<div class="container">
	<h1>Using PyPI</h1>
	<p>Make sure you are running Python 3.7 or newer.</p>
	<pre><code class="language-bash">pip install -U akimous</code></pre>
	<pre><code class="language-bash">akimous</code></pre>
	
	<h1>Using Docker</h1>
	<pre><code class="language-bash">docker run --mount type=bind,source=$HOME,target=/home/user \
	-p 127.0.0.1:3179:3179 -it red8012/akimous</code></pre>
	
</div>

<style>
	.container {
		padding-top: 1rem;
		text-align: center;
        max-width: 48rem;
	}

	h1 {
		font-size: 3rem;
		font-family: Saira;
		color: var(--primary1);
		text-shadow: 0 0 0.5rem white;
	}
    
    pre {
        border-radius: .5rem;
    }

</style>


<script>
    import 'prismjs'
    import 'prismjs/components/prism-bash.min.js'
    import 'prismjs/themes/prism-tomorrow.css'
    import 'prismjs/plugins/toolbar/prism-toolbar.css'
    import 'prismjs/plugins/toolbar/prism-toolbar.min.js'
    import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js'
</script>