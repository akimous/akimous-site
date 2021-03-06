{#if !tocFixed}
<button class="hamburger hamburger--spin" type="button" class:is-active="{tocOpened}" class:snap-to-top="{scrolled}" on:click="{toggleNav}">
    <span class="hamburger-box">
        <span class="hamburger-inner"></span>
    </span>
</button>
{/if}

{#if tocOpened || tocFixed}
<div class="toc" class:snap-to-top="{scrolled}" class:toc-fixed="{tocFixed}" transition:fly="{{x: -300}}">
    <ul>
        <li>
            <TocItem link=""><b>Concepts</b></TocItem>
            <ul>
                <TocItem link="">Tech Stack</TocItem>
                <TocItem link="concepts-ui-design">UI Design</TocItem>
            </ul>
        </li>
        <TocItem link="introduction">UI Walkthrough</TocItem>
        <li>
            <TocItem link=""><b>Features</b></TocItem>
            <ul>
                <TocItem link="">Completion Engine</TocItem>
                <TocItem link="">Layered Keyboard Control</TocItem>
                <TocItem link="">Realtime Formatter</TocItem>
                <TocItem link="">Run Configuration</TocItem>
                <TocItem link="">File Tree</TocItem>
                <TocItem link="">Outline</TocItem>
                <TocItem link="">Documentation</TocItem>
                <TocItem link="">Console</TocItem>
                <TocItem link="">Linter/Formatter</TocItem>
                <TocItem link="">Clipboard/Macro</TocItem>
                <TocItem link="">Find/Replace</TocItem>
                <TocItem link="">References</TocItem>
            </ul>
        </li>
    </ul>
</div>
{/if}

<div id="doc-container" class="content" class:toc-fixed="{tocFixed}">
    {@html renderedContent}
</div>

<style>
    #doc-container {
        background: white;
    }

    .content {
        padding: 2rem;
        max-width: 50rem;
    }
    
    .content.toc-fixed {
        position: relative;
        left: 15.5rem;
        width: calc(100% - 15.6rem);
        max-width: 46rem;
        box-sizing: border-box;
        padding-top: 1px;
    }

    @media (max-width: 500px) {
        .content {
            padding: 0 .5rem;
        }
    }

    .hamburger {
        position: absolute;
        background: rgba(255, 255, 255, 0.5);
        opacity: 0.7;
        z-index: 100;
    }
    
    .snap-to-top {
        position: fixed !important;
        top: 0;
    }
    
    .toc {
        position: absolute;
        width: 15rem;
        height: 100vh;
        padding-top: 60px;
        background: white;
        border-right: 1px solid lightgray;
    }
    
    .toc.toc-fixed {
        padding-top: 0;
    }
    
    b {
        color: #333;
        font-weight: 700;
    }
    
    .toc li {
        list-style: none;
        line-height: 2em;
    }
    
    ul {
        padding-left: 1em;
    }

</style>

<script context="module">
    import marked from 'marked'

    marked.setOptions({
        baseUrl: 'docs/',
        breaks: true,
        smartLists: true,
    })

    export async function preload(page) {
        const { slug } = page.params
        const response = await fetch(`markdown/${slug}.md`)
        const source = await response.text()
        return {
            renderedContent: marked(source),
            slug
        }
    }

</script>

<script>
    import { onMount, onDestroy } from 'svelte'
    import { fly } from 'svelte/transition'
    import TocItem from './_tocItem.svelte'

    export let renderedContent = '',
        slug = 'introduction'
    let tocOpened = false,
        tocFixed = false,
        scrolled = false

    onMount(() => {
        requestAnimationFrame(() => {
            const navHeight = document.getElementById('nav').getBoundingClientRect().height
            window.onscroll = () => {
                scrolled = window.scrollY > navHeight
            }
            window.onresize = () => {
                tocFixed = window.innerWidth > 800
            }
            window.onresize()
        })
    })
    
    onDestroy(() => {
        window.onscroll = null
        window.onresize = null
    })

    function toggleNav() {
        tocOpened = !tocOpened
    }

</script>
