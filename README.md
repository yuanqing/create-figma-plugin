*This page is for contributors. If you’re looking to use Create Figma Plugin, [go to the documentation website](https://yuanqing.github.io/create-figma-plugin/).*

---

# [Create Figma Plugin](https://yuanqing.github.io/create-figma-plugin/) [![npm Version](https://img.shields.io/npm/v/create-figma-plugin?cacheSeconds=1800)](https://npmjs.com/package/create-figma-plugin) [![build](https://img.shields.io/github/workflow/status/yuanqing/create-figma-plugin/build?cacheSeconds=1800)](https://github.com/yuanqing/create-figma-plugin/actions?query=workflow%3Abuild)

> The comprehensive toolkit for developing plugins and widgets for Figma and FigJam

- [Introduction](https://yuanqing.github.io/create-figma-plugin/)
- [Quick start](https://yuanqing.github.io/create-figma-plugin/quick-start/)
- [Configuration](https://yuanqing.github.io/create-figma-plugin/configuration/)
- [UI](https://yuanqing.github.io/create-figma-plugin/ui/)
- [Utilities](https://yuanqing.github.io/create-figma-plugin/utilities/)
- [Recipes](https://yuanqing.github.io/create-figma-plugin/recipes/)
- [Reference plugins/widgets](https://yuanqing.github.io/create-figma-plugin/reference-plugins-and-widgets/)
- [Storybook](https://yuanqing.github.io/create-figma-plugin/storybook/)
- [Changelog](/CHANGELOG.md#readme)

## Contributing

### Pre-requisites

- [Node.js](https://nodejs.org) – v16
- [npm](https://docs.npmjs.com/cli/) – v8

### Building the project locally

```
$ git clone https://github.com/yuanqing/create-figma-plugin
$ cd create-figma-plugin
$ git checkout --track origin/next
$ npm install
```

Active development on the next release occurs on the [`next`](https://github.com/yuanqing/create-figma-plugin/tree/next) branch. Pull requests should be made into `next`.

### Testing changes on an existing plugin/widget

First, build the entire Create Figma Plugin project:

```
$ npm run build
```

Then, create symlinks to the local copy of the project in your existing plugin/widget (eg. `my-project`):

```
$ ls -a
create-figma-plugin  my-project
$ sh create-figma-plugin/scripts/symlink.sh create-figma-plugin my-project
```

Finally, build your plugin/widget:

```
$ cd my-project
$ npm run build
```
