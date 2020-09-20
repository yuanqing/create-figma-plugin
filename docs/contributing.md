# Contributing

## Testing locally

To test changes made in `create-figma-plugin` locally on an existing plugin (eg. `my-plugin`), do:

```
$ ls -a
create-figma-plugin  my-plugin
$ sh create-figma-plugin/scripts/symlink.sh create-figma-plugin my-plugin
```

Then, build your plugin:

```
$ cd my-plugin
$ yarn build
```
