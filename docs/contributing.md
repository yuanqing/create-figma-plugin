# Contributing

## Testing locally on an existing plugin

First, build the Create Figma Plugin project:

```
$ cd create-figma-plugin
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
