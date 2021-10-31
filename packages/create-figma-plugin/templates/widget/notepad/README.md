# {{name}}

{{#description}}
> {{description}}

{{/description}}
## Development guide

*This widget is built with [Create Figma Plugin](https://yuanqing.github.io/create-figma-plugin/).*

### Pre-requisites

- [Node.js](https://nodejs.org) – v14
- [Figma desktop app](https://figma.com/downloads/)

### Build the widget

To build the widget:

```
$ npm run build
```

This will generate a [`manifest.json`](https://figma.com/widget-docs/manifest/) file and a `build/` directory containing the JavaScript bundle(s) for the widget.

To watch for code changes and rebuild the widget automatically:

```
$ npm run watch
```

### Install the widget

In the Figma desktop app:

1. Open a FigJam document.
2. Right-click the canvas, then go to `Widgets` → `Development` → `Import widget from manifest…`.
3. Select the `manifest.json` file that was generated.

### Debugging

Use `console.log` statements to inspect values in your code.

To open the developer console in the Figma desktop app, right-click the canvas, then go to `Plugins` → `Development` → `Open Console`.

## See also

- [Create Figma Plugin docs](https://yuanqing.github.io/create-figma-plugin/)
- [Storybook](https://yuanqing.github.io/create-figma-plugin/ui/)
- [Figma/FigJam plugin docs](https://figma.com/plugin-docs/)
- [FigJam widget docs](https://figma.com/widget-docs/)
- [`figma/plugin-samples`](https://github.com/figma/plugin-samples#readme)
- [`figma/widget-samples`](https://github.com/figma/widget-samples#readme)
- [`yuanqing/awesome-create-figma-plugin`](https://github.com/yuanqing/awesome-create-figma-plugin)
- [`yuanqing/figma-plugins`](https://github.com/yuanqing/figma-plugins)
