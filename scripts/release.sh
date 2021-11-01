#!/bin/sh

# merge `next` into `main`
git checkout main
git merge next

# create a new version and publish to `npm`
yarn run version
yarn run publish

# push `main`, including tags
git push --no-verify --tags origin main

# delete `next`
git branch -D next
git push --no-verify origin :next

# create and push `next`
git checkout -b next
git push --no-verify origin next
