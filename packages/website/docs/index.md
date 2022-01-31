---
{
  "order": 1,
  "title": "Introduction",
  "tweets": [
    {
      "date": "Aug 21",
      "handle": "alexwidua",
      "id": "1428782856998989827",
      "name": "Alex Widua",
      "profilePhotoUrl": "https://pbs.twimg.com/profile_images/1460377348621148168/yroE2ckE_400x400.jpg",
      "text": "This was also the first time I used <a href=\"https://twitter.com/yuanqinglim\" target=\"_blank\">@yuanqinglim</a>’s Create Figma Plugin toolkit and wow – what a comprehensive and thought-out library. Allowed me to have the first prototype up and running in just an hour. A staple for building Figma plugins from now on 😌"
    },
    {
      "date": "Aug 19",
      "handle": "tkmadeit",
      "id": "1428024307511402499",
      "name": "tkmadeit",
      "profilePhotoUrl": "https://pbs.twimg.com/profile_images/1322343885172051970/7r2g2q0E_400x400.jpg",
      "text": "If you build plugins for <a href=\"https://twitter.com/figmadesign\" target=\"_blank\">@figmadesign</a> do yourself a favor and start using Create Figma Plugin toolkit by <a href=\"https://twitter.com/yuanqinglim\" target=\"_blank\">@yuanqinglim</a>!"
    },
    {
      "date": "Aug 19",
      "handle": "abynim",
      "id": "1428137898142883840",
      "name": "Aby Nimbalkar",
      "profilePhotoUrl": "https://pbs.twimg.com/profile_images/1484323185185427456/o6Nzp-Hb_400x400.jpg",
      "text": "I know I’m late to this party but I just published my first <a href=\"https://twitter.com/figmadesign\" target=\"_blank\">@figmadesign</a> plugin 🥳 (org-only so can’t share yet). <a href=\"https://twitter.com/yuanqinglim\" target=\"_blank\">@yuanqinglim</a>’s Create Figma Plugin library made building the UI so easy and helped me focus on the logic instead. Highly recommended!"
    }
  ]
}
---

# The comprehensive toolkit for developing plugins and widgets for Figma and&nbsp;FigJam

## Features

<div>
<ul>
<li class="emoji-list-item"><span class="emoji-list-item__emoji">🤗</span> <span class="emoji-list-item__text"><a href="<%- query('page', 'quick-start').url %>#bootstrapping-a-new-plugin-widget-from-a-template">Bootstrap a new plugin/widget from a template</a></span></li>
<li class="emoji-list-item"><span class="emoji-list-item__emoji">🤯</span> <span class="emoji-list-item__text"><a href="<%- query('page', 'quick-start').url %>#building-the-plugin-widget">Bundle and minify your TypeScript or JavaScript code</a>, with sub-second build times made possible by the esbuild compiler</span></li>
<li class="emoji-list-item"><span class="emoji-list-item__emoji">😌</span> <span class="emoji-list-item__text"><a href="<%- query('page', 'recipes').url %>#specifying-multiple-commands-in-the-plugin-sub-menu">Write plugin menu commands in separate files</a>, with support for each command having their own UI implementation</span></li>
<li class="emoji-list-item"><span class="emoji-list-item__emoji">🤩</span> <span class="emoji-list-item__text"><a href="<%- query('page', 'ui').url %>#using-the-preact-component-library">Create a UI for your plugin/widget</a> using a library of Preact components that replicate the Figma/FigJam editor’s UI design</span></li>
<li class="emoji-list-item"><span class="emoji-list-item__emoji">🤓</span> <span class="emoji-list-item__text"><a href="<%- query('page', 'utilities').url %>">Leverage an extensive set of utility functions</a>, including utilities for passing data between your plugin/widget’s main and UI contexts</span></li>
</ul>
</div>

<div class="button">
<a href="<%- query('page', 'quick-start').url %>">Get started</a>
</div>

## What people say about Create&nbsp;Figma&nbsp;Plugin

<div>
<ul>
<% for (const { date, handle, id, name, profilePhotoUrl, text } of tweets) { %>
<li class="tweet">
<p class="tweet__text"><%= text %></p>
<div class="tweet__meta">
<div class="tweet__author">
<a href="https://twitter.com/<%- handle %>">
<div class="image"><img src="<%- profilePhotoUrl %>" /></div>
<div class="tweet__name"><%- name %></div>
<div class="tweet__handle">@<%- handle %></div>
</a>
</div>
<div class="tweet__date">
<a href="https://twitter.com/<%- handle %>/status/<%- id %>"><%- date %></a>
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
return ['Copy & Rotate', 'Draw Connector', 'Free Hands', 'Protofly', 'Prototyper', 'RTL PLZ', 'Selection Variants'].indexOf(plugin.name) !== -1
}) %>
<% for (const { id, name } of featuredPlugins) { %>
<li class="featured-plugin">
<a href="https://figma.com/community/plugin/<%- id %>" target="_blank">
<span class="image"><img src="https://figma.com/community/plugin/<%- id %>/icon" /></span>
<span class="featured-plugin__name"><%- name %></span>
</a>
</li>
<% } %>
</ul>
</div>
<div class="columns__column">
<p class="muted">Widgets</p>
<ul>
<% const featuredWidgets = widgets.filter(function (widget) {
return ['Device Frames', 'Graphpad', 'Import PDF Into FigJam', 'Mad Lib', 'Markdown Notes', 'Storymapper', 'Teams'].indexOf(widget.name) !== -1
}) %>
<% for (const { id, name } of featuredWidgets) { %>
<li class="featured-plugin">
<a href="https://figma.com/community/widget/<%- id %>" target="_blank">
<span class="image"><img src="https://figma.com/community/widget/<%- id %>/icon" /></span>
<span class="featured-plugin__name"><%- name %></span>
</a>
</li>
<% } %>
</ul>
</div>
</div>

<div class="button">
<a href="<%- query('page', 'reference-plugins-and-widgets').url %>">More reference plugins/widgets</a>
</div>
