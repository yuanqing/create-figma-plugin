# {{name}}

{{#description}}
> {{description}}

{{/description}}
## Development guide

*This plugin is built with [Create Figma Plugin](https://yuanqing.github.io/create-figma-plugin/).*

### Pre-requisites

- [Node.js](https://nodejs.org) – v14
- [Figma desktop app](https://figma.com/downloads/)

### Build the plugin

To build the plugin:

```
$ npm run build
```

This will generate a [`manifest.json`](https://figma.com/plugin-docs/manifest/) file and a `build/` directory containing the JavaScript bundle(s) for the plugin.

To watch for code changes and rebuild the plugin automatically:

```
$ npm run watch
```

### Install the plugin

In the Figma desktop app:

1. Open a Figma or FigJam document.
2. Right-click the canvas, then go to `Plugins` → `Development` → `Import plugin from manifest…`.
3. Select the `manifest.json` file that was generated.

### Debugging

Use `console.log` statements to inspect values in your code.

To open the developer console in the Figma desktop app, right-click the canvas, then go to `Plugins` → `Development` → `Open Console`.

## See also

- [Create Figma Plugin docs](https://yuanqing.github.io/create-figma-plugin/)
- [Storybook](https://yuanqing.github.io/create-figma-plugin/ui/)
- [Figma/FigJam plugin docs](https://figma.com/plugin-docs/)
- [`figma/plugin-samples`](https://github.com/figma/plugin-samples#readme)
- [`yuanqing/awesome-create-figma-plugin`](https://github.com/yuanqing/awesome-create-figma-plugin)
- [`yuanqing/figma-plugins`](https://github.com/yuanqing/figma-plugins)
