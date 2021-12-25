---
order: 7
title: Reference plugins/widgets
---

# Reference plugins/widgets

<% let authors %>

## Figma/FigJam plugins

<div>
<ul>
<% for (const plugin of plugins) { %>
<li class="plugin">
<a href="https://figma.com/community/plugin/<%- plugin.id %>" target="_blank" class="plugin__image">
<div class="image image--large"><img src="https://figma.com/community/plugin/<%- plugin.id %>/icon" /></div>
</a>
<div class="plugin__main">
<div class="plugin__meta">
<div class="plugin__name"><a href="https://figma.com/community/plugin/<%- plugin.id %>" target="_blank"><%- plugin.name %></a></div>
<div class="plugin__meta-inner">
<div class="plugin__authors">
<% authors = [] %>
<% for (const author of plugin.authors) { %>
  <% authors.push(`<a href="${author.url}" target="_blank">${author.name}</a>`) %>
<% } %>
by <%= authors.join(', ') %>
</div>
<% if (plugin.githubUrl !== null) { %>
<div class="plugin__github">
<a href="<%- plugin.githubUrl %>" target="_blank">GitHub</a>
</div>
<% } %>
</div>
</div>
<p class="plugin__description"><%- plugin.description %></p>
</div>
</li>
<% } %>
</ul>
</div>

## FigJam widgets

<div>
<ul>
<% for (const plugin of widgets) { %>
<li class="plugin">
<a href="https://figma.com/community/widget/<%- plugin.id %>" target="_blank" class="plugin__image">
<div class="image image--large"><img src="https://figma.com/community/widget/<%- plugin.id %>/icon" /></div>
</a>
<div class="plugin__main">
<div class="plugin__meta">
<div class="plugin__name"><a href="https://figma.com/community/widget/<%- plugin.id %>" target="_blank"><%- plugin.name %></a></div>
<div class="plugin__meta-inner">
<div class="plugin__authors">
<% authors = [] %>
<% for (const author of plugin.authors) { %>
  <% authors.push(`<a href="${author.url}" target="_blank">${author.name}</a>`) %>
<% } %>
by <%= authors.join(', ') %>
</div>
<% if (plugin.githubUrl !== null) { %>
<div class="plugin__github">
<a href="<%- plugin.githubUrl %>" target="_blank">GitHub</a>
</div>
<% } %>
</div>
</div>
<p class="plugin__description"><%- plugin.description %></p>
</div>
</li>
<% } %>
</ul>
</div>
