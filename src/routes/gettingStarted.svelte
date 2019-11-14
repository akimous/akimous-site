<div class="single-column-container">
    <section>
        <h1>Using PyPI</h1>
        <h2>Prerequisite</h2>
        <ul>
            <li>
                Python 3.7 or 3.8 (with pip)
            </li>
            <li>
                C/C++ compiler (some dependencies require one during installation, notably XGBoost and python-levenshtein)
            </li>
            <li>
                A modern browser (recent versions of Firefox, Edge or Chrome)
            </li>
        </ul>

        <h2>Installation</h2>
        <p>
            Type the following command into your terminal and hit enter.<br>
            This will install Akimous with all its dependencies.
            (If it is already installed, it will be upgraded to the latest version)
        </p>
        <pre><code class="language-bash">pip install -U akimous</code></pre>

        <h2>Starting Application</h2>
        <p>
            Start Akimous from the terminal.
        </p>
        <pre><code class="language-bash">akimous</code></pre>
        <p>
            It should automatically open your default browser and show the IDE.
        </p>
        <p class="warning">
            If the browser does not open automatically,
            check whether the terminal prints something like
            <code>Starting server, listening on 127.0.0.1:3179</code>.
            If it does, manually go to the indicated URL (e.g. <code>http://127.0.0.1:3179</code>)
        </p>
        <p class="tip">
            If the default port 3179 is already in use, specify a new one with --port argument.
            (e.g. <code>akimous --port 12345</code>)
        </p>

        <h2>Opening Project Folder</h2>
        <p>
            After opening Akimous in the browser,
            you'll be prompted to open a project folder containing your Python files.
            Select one and click open.
        </p>
        <img src="img/openFolder.png" alt="">
        <p class="tip">
            You can come back here later by using menu item File <i class="fas fa-arrow-right"></i> Open Folder.
        </p>
    </section>
    <section>
        <h1>Using Docker</h1>
        <p>
            If you have difficulty installing,
            or you are running in a cloud environment,
            try the prebuilt docker image.
        </p>
        <p>
            The following command will
        </p>
        <ul>
            <li>Pull the prebuilt Akimous image from Docker Hub.</li>
            <li>Mount your home directory to <code>/home/user</code> inside the container.</li>
            <li>Bind port 3179 to localhost. (Only access from localhost is allowed for security reason)</li>
        </ul>
        <pre><code class="language-bash">docker run --mount type=bind,source=$HOME,target=/home/user \
	-p 127.0.0.1:3179:3179 -it red8012/akimous akimous</code></pre>
        <p class="warning">
            If the port is not exposed to the internet and you want access from outside of the machine in a secure intranet,
            try <code>-p 3179:3179</code> instead.
        </p>
        <p class="danger">
            Never expose the port to the internet, or every one can run arbitrary code on your computer.
        </p>
    </section>
</div>

<style>
    img {
        width: 600px;
        max-width: 80%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    p.tip,
    p.warning,
    p.danger {
        padding: .7rem 1.5rem .7rem 1.5rem;
        margin: 2rem 0;
        border-left: .3rem solid;
        position: relative;
        border-bottom-right-radius: .5rem;
        border-top-right-radius: .5rem;
    }

    p.tip:before,
    p.warning:before,
    p.danger:before {
        content: "!";
        position: absolute;
        top: 14px;
        left: -12px;
        color: #fff;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        text-align: center;
        line-height: 20px;
        font-weight: bold;
    }

    p.tip {
        color: #274D28;
        border-left-color: #3c763d;
        background-color: rgba(241, 249, 241, 0.83);
    }

    p.tip:before {
        content: "i";
        background-color: #3c763d;
    }

    p.warning {
        color: #665720;
        border-left-color: #f7d24c;
        background-color: #fefbed;
    }

    p.warning:before {
        background-color: #f7d24c;
    }

    p.danger {
        color: #662929;
        border-left-color: #f66;
        background-color: #FFF2F2;
    }

    p.danger:before {
        background-color: #f66;
    }

</style>

<script>
    import { onMount } from 'svelte'
    import Prism from 'prismjs'
    import 'prismjs/components/prism-bash.min.js'
    import 'prismjs/themes/prism-tomorrow.css'
    import 'prismjs/plugins/toolbar/prism-toolbar.css'
    import 'prismjs/plugins/toolbar/prism-toolbar.min.js'
    import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js'

    Prism.manual = true
    
    onMount(() => {
        requestAnimationFrame(() => {
            Prism.highlightAll(false)
        })
    })

</script>
