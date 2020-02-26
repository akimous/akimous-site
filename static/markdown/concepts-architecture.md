# Concepts - Architecture

This document provides some context of the decisions we made. I am not saying that those are the best possible choices, but given the context, this article will explain some of the reasons why such decisions are made.

## Why Svelte framework is chosen for building the UI?

### Aesthetic

For 30 or more years, HTML is designed to be the main container of all other elements, such as tags, scripts, and stylesheets. This model is reasonable and works well (since HTML is always the first file being loaded when visiting a website). Svelte follows this convention and makes developers who are already familiar with HTML feel at home.

Although React is a successful framework, and is much more popular thatn Svelte, JSX just doesn't feel right to me. React does provide an effective way for building reusable components, but it still does not elegantly solve some of the problems we desire GUI frameworks to solve. Hence CSS-in-JS and the like are invented (since React never treats HTML and CSS as first class citizens). Just take a look at [CJSS](https://github.com/cjss-group/CJSS) and you will realize CSS-in-JS is essentially trying to solve problems *created* by React. In other words, React solves some problems, but creates some others at the same time. Not very elegant in my opinion.

The polyfill is quite quirky though. It behave drastically different on different browsers, and some of them even failed to load the required polyfills.

Secondly, at the time Polymer (version 2.x) didn't integrate well with javascript toolchains. Polymer 3 promised to address these issues. However, after Google announced Polymer 3 and put out a preview version, the whole projecct become silent for months. I didn't even know whether it was under active development or not. In contrary, Svelte is much more transparent. I can easily know what contributors are doing on Github. Thus I feel more confident to put bets on it even if Svelte is not backed by a giant software company.

