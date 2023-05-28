---
{
  "order": 7,
  "title": "Reference plugins/widgets"
}
---

# Reference plugins/widgets

## Plugins

<div class="plugins">
<div class="plugin-filters">
  <button class="plugin-filter plugin-filter--all plugin-filter--active"><span>All</span> <span class="plugin-filter__count"><%= plugins.length %></span></button>
  <button class="plugin-filter plugin-filter--open-source"><span>Open source</span> <span class="plugin-filter__count"><%= plugins.filter(function ({ githubUrl }) {
    return githubUrl !== null
  }).length %></span></button>
</div>
<ul>
<% for (const { authors, description, githubUrl, id, name } of plugins) { %>
<li class="plugin" data-open-source="<%= githubUrl === null ? '0' : '1' %>">
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
<div class="plugin__github"><a href="<%- githubUrl %>" target="_blank">GitHub</a></div>
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

<div class="widgets">
<div class="plugin-filters">
  <button class="plugin-filter plugin-filter--all plugin-filter--active"><span>All</span> <span class="plugin-filter__count"><%= widgets.length %></span></button>
  <button class="plugin-filter plugin-filter--open-source"><span>Open source</span> <span class="plugin-filter__count"><%= widgets.filter(function ({ githubUrl }) {
    return githubUrl !== null
  }).length %></span></button>
</div>
<ul>
<% for (const { authors, description, githubUrl, id, name } of widgets) { %>
<li class="plugin" data-open-source="<%= githubUrl === null ? '0' : '1' %>">
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
<div class="plugin__github"><a href="<%- githubUrl %>" target="_blank">GitHub</a></div>
<% } %>
</div>
</div>
<p class="plugin__description"><%- description %></p>
</div>
</li>
<% } %>
</ul>
</div>

<script>
  const ACTIVE_CLASS_NAME = 'plugin-filter--active'
  const DATA_ATTRIBUTE_NAME = 'data-open-source'
  const HIDDEN_ATTRIBUTE = 'aria-hidden'
  function createFilterableList (parentElement) {
    const filterAllButtonElement = parentElement.querySelector('.plugin-filter--all')
    const filterOpenSourceButtonElement = parentElement.querySelector('.plugin-filter--open-source')
    const pluginsParentElement = parentElement.children[0]
    const pluginElements = [].slice.call(parentElement.querySelector('ul').children)
    filterAllButtonElement.addEventListener('click', function () {
      filterAllButtonElement.classList.add(ACTIVE_CLASS_NAME)
      filterOpenSourceButtonElement.classList.remove(ACTIVE_CLASS_NAME)
      for (const plugin of pluginElements) {
        plugin.removeAttribute(HIDDEN_ATTRIBUTE)
      }
    })
    filterOpenSourceButtonElement.addEventListener('click', function () {
      filterAllButtonElement.classList.remove(ACTIVE_CLASS_NAME)
      filterOpenSourceButtonElement.classList.add(ACTIVE_CLASS_NAME)
      for (const plugin of pluginElements) {
        if (plugin.getAttribute(DATA_ATTRIBUTE_NAME) === '1') {
          plugin.removeAttribute(HIDDEN_ATTRIBUTE)
        } else {
          plugin.setAttribute(HIDDEN_ATTRIBUTE, 'true')
        }
      }
    })
  }
  createFilterableList(document.querySelector('.plugins'))
  createFilterableList(document.querySelector('.widgets'))
</script>
