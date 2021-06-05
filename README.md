# [Create Figma Plugin](https://yuanqing.github.io/create-figma-plugin/) [![npm Version](https://img.shields.io/npm/v/create-figma-plugin?cacheSeconds=1800)](https://www.npmjs.com/package/create-figma-plugin) [![build](https://img.shields.io/github/workflow/status/yuanqing/create-figma-plugin/build?cacheSeconds=1800)](https://github.com/yuanqing/create-figma-plugin/actions?query=workflow%3Abuild)

> A comprehensive toolkit for developing Figma plugins

- [Quick start](https://yuanqing.github.io/create-figma-plugin/#quick-start)
- [Figma plugin basics](https://yuanqing.github.io/create-figma-plugin/#figma-plugin-basics)
- [Configuration](https://yuanqing.github.io/create-figma-plugin/#configuration)
- [UI](https://yuanqing.github.io/create-figma-plugin/#ui-1)
- [Utilities](https://yuanqing.github.io/create-figma-plugin/#utilities)
- [Recipes](https://yuanqing.github.io/create-figma-plugin/#recipes)
- [Storybook](https://yuanqing.github.io/create-figma-plugin/ui/)
- [Changelog](/CHANGELOG.md#readme)

## Contributing

### Pre-requisites

- [Node.js](https://nodejs.org) – v14
- [Yarn](https://classic.yarnpkg.com) – v1

### Building the project locally

```
$ git clone https://github.com/yuanqing/create-figma-plugin
$ cd create-figma-plugin
$ git checkout --track origin/next
$ yarn install
```

Active development on the next release occurs on the [`next`](https://github.com/yuanqing/create-figma-plugin/tree/next) branch. Pull requests should be made into `next`.

### Testing changes on an existing plugin

First, build the entire Create Figma Plugin project:

```
$ yarn run build
```

Then, create symlinks to the local copy of the project in your existing Figma plugin (eg. `my-plugin`):

```
$ ls -a
create-figma-plugin  my-plugin
$ sh create-figma-plugin/scripts/symlink.sh create-figma-plugin my-plugin
```

Finally, build your plugin:

```
$ cd my-plugin
$ yarn run build
```
