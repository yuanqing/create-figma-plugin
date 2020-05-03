# {{name}}

{{#description}}
> {{description}}

{{/description}}
## Development guide

*This plugin is built with [Create Figma Plugin](https://github.com/yuanqing/create-figma-plugin).*

### Pre-requisites

- [Node.js](https://nodejs.org/)
- [Figma desktop app](https://figma.com/downloads/)

### Building the plugin

First:

```
$ npm install
```

To build the plugin:

```
$ npm run build
```

This will generate a [`manifest.json`](https://figma.com/plugin-docs/manifest/) file and a `build/` directory containing a JavaScript bundle for the plugin.

To watch for code changes and rebuild the plugin automatically:

```
$ npm run watch
```

### Installing the plugin

In the Figma desktop app:

- Open a Figma document.
- Go to `Plugins` → `Development` → `New Plugin…`.
- Click the `Click to choose a manifest.json file` box, and select the `manifest.json` file that was generated.

### Debugging

Use `console.log` statements to inspect values in your code.

To open the developer console in the Figma desktop app, go to `Plugins` → `Development` → `Open Console`.

### Docs

- [Create Figma Plugin docs](https://github.com/yuanqing/create-figma-plugin#docs)
- [Figma plugin API docs](https://figma.com/plugin-docs/api/)
