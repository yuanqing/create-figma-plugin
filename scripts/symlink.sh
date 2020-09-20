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

  rm -rf "$TARGET_DIRECTORY"/node_modules/@create-figma-plugin
  mkdir -p "$TARGET_DIRECTORY"/node_modules/@create-figma-plugin
  ln -s "$SOURCE_DIRECTORY"/packages/build "$TARGET_DIRECTORY"/node_modules/@create-figma-plugin
  ln -s "$SOURCE_DIRECTORY"/packages/common "$TARGET_DIRECTORY"/node_modules/@create-figma-plugin
  ln -s "$SOURCE_DIRECTORY"/packages/tsconfig "$TARGET_DIRECTORY"/node_modules/@create-figma-plugin
  ln -s "$SOURCE_DIRECTORY"/packages/ui "$TARGET_DIRECTORY"/node_modules/@create-figma-plugin
  ln -s "$SOURCE_DIRECTORY"/packages/utilities "$TARGET_DIRECTORY"/node_modules/@create-figma-plugin

  rm -rf "$TARGET_DIRECTORY"/node_modules/.bin/build-figma-plugin
  mkdir -p "$TARGET_DIRECTORY"/node_modules/.bin
  ln -s "$SOURCE_DIRECTORY"/packages/build/lib/cli.js "$TARGET_DIRECTORY"/node_modules/.bin/build-figma-plugin
  chmod +x "$TARGET_DIRECTORY"/node_modules/.bin/build-figma-plugin
}

main "$@"
