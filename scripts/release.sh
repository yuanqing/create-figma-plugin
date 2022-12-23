#!/bin/sh

# immediately exit if any of the shell commands fail
set -e

# build
npm run build

# exit if there were any uncommitted files
if [[ $(git diff) != '' ]]; then
  echo 'Error: Uncommitted files'
  exit 1
fi

# merge `next` into `main`
git checkout main
git merge next

# create a new version and publish to `npm`
npm run packages-version
npm run packages-publish

# push `main`, including tags
git push --no-verify --tags origin main

# delete `next`
git branch -D next
git push --no-verify origin :next

# create and push `next`
git checkout -b next
git push --no-verify origin next

# update docs
npm run website-deploy
