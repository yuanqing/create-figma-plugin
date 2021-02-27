# Contributing

## Pre-requisites

- [Node.js](https://nodejs.org/) – v14
- [Yarn](https://classic.yarnpkg.com/) – v1

## Testing locally on an existing plugin

First, build the Create Figma Plugin project:

```
$ cd create-figma-plugin
$ yarn
$ yarn build
```

Then, create symlinks to the local copy of the project in your existing plugin (eg. `my-plugin`):

```
$ ls -a
create-figma-plugin  my-plugin
$ sh create-figma-plugin/scripts/symlink.sh create-figma-plugin my-plugin
```

Finally, build your plugin:

```
$ cd my-plugin
$ yarn build
```
