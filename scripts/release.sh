#!/bin/sh

# generate docs
npm run generate-docs

# build
npm run build

# exit if there were uncommitted files
if [[ $(git diff) != '' ]]; then
  echo 'Error: Uncommitted files'
  exit 1
fi

# merge `next` into `main`
git checkout main
git merge next

# create a new version and publish to `npm`
npm run version
npm run publish

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
