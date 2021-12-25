---
order: 1
title: Introduction
---

# The comprehensive toolkit for developing plugins and widgets for Figma and&nbsp;FigJam

## Features

<div>
<ul>
<li class="emoji-list-item"><span class="emoji-list-item__emoji">🤗</span> <span class="emoji-list-item__text"><a href="<%- pagesById['quick-start'].metadata.url %>#bootstrapping-a-new-pluginwidget-from-a-template">Bootstrap a new plugin/widget from a template</a></span></li>
<li class="emoji-list-item"><span class="emoji-list-item__emoji">🤯</span> <span class="emoji-list-item__text"><a href="<%- pagesById['quick-start'].metadata.url %>#building-the-pluginwidget">Bundle and minify your TypeScript or JavaScript code</a>, with sub-second build times made possible by the esbuild compiler</span></li>
<li class="emoji-list-item"><span class="emoji-list-item__emoji">😌</span> <span class="emoji-list-item__text"><a href="<%- pagesById['recipes'].metadata.url %>#specifying-multiple-commands-in-the-plugin-sub-menu">Write plugin menu commands in separate files</a>, with support for each command having their own UI implementation</span></li>
<li class="emoji-list-item"><span class="emoji-list-item__emoji">🤩</span> <span class="emoji-list-item__text"><a href="<%- pagesById['ui'].metadata.url %>#using-the-preact-component-library">Create a UI for your plugin/widget</a> using a library of Preact components that replicate the Figma/FigJam editor’s UI design</span></li>
<li class="emoji-list-item"><span class="emoji-list-item__emoji">🤓</span> <span class="emoji-list-item__text"><a href="<%- pagesById['utilities'].metadata.url %>">Leverage an extensive set of utility functions</a>, including utilities for passing data between your plugin/widget’s main and UI contexts</span></li>
</ul>
</div>

<div class="button">
<a href="<%- pagesById['quick-start'].metadata.url %>">Get started</a>
</div>

## What people say about Create&nbsp;Figma&nbsp;Plugin

<div>
<ul>
<% for (const tweet of tweets) { %>
<li class="tweet">
<p class="tweet__text"><%= tweet.text %></p>
<div class="tweet__meta">
<div class="tweet__author">
<a href="https://twitter.com/<%- tweet.handle %>">
<div class="image"><img src="<%- tweet.profilePhoto %>" /></div>
<div class="tweet__name"><%- tweet.name %></div>
<div class="tweet__handle">@<%- tweet.handle %></div>
</a>
</div>
<div class="tweet__date">
<a href="https://twitter.com/<%- tweet.handle %>/status/<%- tweet.id %>"><%- tweet.date %></a>
</div>
</div>
</li>
<% } %>
</ul>
</div>

## Plugins/widgets made with Create&nbsp;Figma&nbsp;Plugin

<div class="columns">
<div class="columns__column">
<p class="muted">Plugins</p>
<ul>
<% const featuredPlugins = plugins.filter(function (plugin) {
return ['Color Kitchen', 'Copy & Rotate', 'Draw Connector', 'Free Hands', 'Protofly', 'RTL PLZ', 'Selection Variants'].indexOf(plugin.name) !== -1
}) %>
<% for (const plugin of featuredPlugins) { %>
<li class="featured-plugin">
<a href="https://figma.com/community/plugin/<%- plugin.id %>" target="_blank" rel="nofollow">
<span class="image"><img src="https://figma.com/community/plugin/<%- plugin.id %>/icon" /></span>
<span class="featured-plugin__name"><%- plugin.name %></span>
</a>
</li>
<% } %>
</ul>
</div>
<div class="columns__column">
<p class="muted">Widgets</p>
<ul>
<% const featuredWidgets = widgets.slice(0, 7) %>
<% for (const widget of featuredWidgets) { %>
<li class="featured-plugin">
<a href="https://figma.com/community/widget/<%- widget.id %>" target="_blank" rel="nofollow">
<span class="image"><img src="https://figma.com/community/widget/<%- widget.id %>/icon" /></span>
<span class="featured-plugin__name"><%- widget.name %></span>
</a>
</li>
<% } %>
</ul>
</div>
</div>

<div class="button">
<a href="<%- pagesById['reference-plugins-and-widgets'].metadata.url %>">More reference plugins/widgets</a>
</div>
