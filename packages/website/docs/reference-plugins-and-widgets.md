---
{
  "order": 7,
  "title": "Reference plugins/widgets"
}
---

# Reference plugins/widgets

## Plugins

<div>
<ul>
<% for (const { authors, description, githubUrl, id, name } of plugins) { %>
<li class="plugin">
<a href="https://figma.com/community/plugin/<%- id %>" target="_blank" class="plugin__image">
<div class="image image--large"><img src="https://figma.com/community/plugin/<%- id %>/icon" /></div>
</a>
<div class="plugin__main">
<div class="plugin__meta">
<div class="plugin__name"><a href="https://figma.com/community/plugin/<%- id %>" target="_blank"><%- name %></a></div>
<div class="plugin__meta-inner">
<div class="plugin__authors">
<% let pluginAuthors = [] %>
<% for (const { name, url } of authors) { %>
  <% pluginAuthors.push(`<a href="${url}" target="_blank">${name}</a>`) %>
<% } %>
by <%= pluginAuthors.join(', ') %>
</div>
<% if (githubUrl !== null) { %>
<div class="plugin__github">
<a href="<%- githubUrl %>" target="_blank">GitHub</a>
</div>
<% } %>
</div>
</div>
<p class="plugin__description"><%- description %></p>
</div>
</li>
<% } %>
</ul>
</div>

## Widgets

<div>
<ul>
<% for (const { authors, description, githubUrl, id, name } of widgets) { %>
<li class="plugin">
<a href="https://figma.com/community/widget/<%- id %>" target="_blank" class="plugin__image">
<div class="image image--large"><img src="https://figma.com/community/widget/<%- id %>/icon" /></div>
</a>
<div class="plugin__main">
<div class="plugin__meta">
<div class="plugin__name"><a href="https://figma.com/community/widget/<%- id %>" target="_blank"><%- name %></a></div>
<div class="plugin__meta-inner">
<div class="plugin__authors">
<% let widgetAuthors = [] %>
<% for (const { name, url } of authors) { %>
  <% widgetAuthors.push(`<a href="${url}" target="_blank">${name}</a>`) %>
<% } %>
by <%= widgetAuthors.join(', ') %>
</div>
<% if (githubUrl !== null) { %>
<div class="plugin__github">
<a href="<%- githubUrl %>" target="_blank">GitHub</a>
</div>
<% } %>
</div>
</div>
<p class="plugin__description"><%- description %></p>
</div>
</li>
<% } %>
</ul>
</div>
