#!/bin/sh

set -e

main() {
  if [ "$#" -eq 0 ]; then
    echo "Need a source directory" >&2
    return
  fi
  SOURCE_DIRECTORY=$(cd "$1"; pwd)

  if [ "$#" -eq 1 ]; then
    echo "Need a target directory" >&2
    return
  fi
  TARGET_DIRECTORY=$(cd "$2"; pwd)

  rm -rf "$TARGET_DIRECTORY"/node_modules/create-figma-plugin
  ln -s "$SOURCE_DIRECTORY"/packages/create-figma-plugin "$TARGET_DIRECTORY"/node_modules

  rm -rf "$TARGET_DIRECTORY"/node_modules/@create-figma-plugin
  mkdir -p "$TARGET_DIRECTORY"/node_modules/@create-figma-plugin
  ln -s "$SOURCE_DIRECTORY"/packages/build "$TARGET_DIRECTORY"/node_modules/@create-figma-plugin
  ln -s "$SOURCE_DIRECTORY"/packages/common "$TARGET_DIRECTORY"/node_modules/@create-figma-plugin
  ln -s "$SOURCE_DIRECTORY"/packages/monetization "$TARGET_DIRECTORY"/node_modules/@create-figma-plugin
  ln -s "$SOURCE_DIRECTORY"/packages/tsconfig "$TARGET_DIRECTORY"/node_modules/@create-figma-plugin
  ln -s "$SOURCE_DIRECTORY"/packages/ui "$TARGET_DIRECTORY"/node_modules/@create-figma-plugin
  ln -s "$SOURCE_DIRECTORY"/packages/utilities "$TARGET_DIRECTORY"/node_modules/@create-figma-plugin

  rm -rf "$TARGET_DIRECTORY"/node_modules/.bin/create-figma-plugin
  ln -s "$SOURCE_DIRECTORY"/packages/create-figma-plugin/lib/cli.js "$TARGET_DIRECTORY"/node_modules/.bin/create-figma-plugin
  chmod +x "$TARGET_DIRECTORY"/node_modules/.bin/create-figma-plugin

  rm -rf "$TARGET_DIRECTORY"/node_modules/.bin/build-figma-plugin
  ln -s "$SOURCE_DIRECTORY"/packages/build/lib/cli.js "$TARGET_DIRECTORY"/node_modules/.bin/build-figma-plugin
  chmod +x "$TARGET_DIRECTORY"/node_modules/.bin/build-figma-plugin

  # We need to create a symlink for `preact` to the copy in `create-figma-plugin`
  # so that hooks will work correctly
  rm -rf "$TARGET_DIRECTORY"/node_modules/preact
  ln -s "$SOURCE_DIRECTORY"/node_modules/preact "$TARGET_DIRECTORY"/node_modules
}

main "$@"
