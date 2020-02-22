<a {href} on:click="{activate}">
    <li class:active>
        <span class="inner">
            <slot></slot>
        </span>
    </li>
</a>

<style>
    a {
        text-decoration: none;
    }
    
    li {
        list-style: none;
        line-height: 2.4em;
        font-weight: normal;
        color: #777;

    }

    .inner {
        background: white;
        padding-right: 1em;
    }

    .active {
        background: linear-gradient(0deg, white 0%, white 47%, var(--primary2) 47%, var(--primary2) 49%, white 49%, white 100%);
        color: var(--primary2);
    }
    
    a:hover>li {
        background: linear-gradient(0deg, white 0%, white 47%, var(--primary2) 47%, var(--primary2) 49%, white 49%, white 100%);
    }

</style>

<script context="module">
    const deactivators = {}

</script>

<script>
    import { onMount } from 'svelte'
    export let link = ''
    let active = false

    $: href = `/docs/${link}`

    function activate() {
        deactivators[window.location.pathname]()
        active = true
    }

    function deactivate() {
        active = false
    }

    onMount(() => {
        deactivators[href] = deactivate
        if (window.location.pathname === href)
            activate()
    })

</script>
