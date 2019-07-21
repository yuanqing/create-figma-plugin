#!/usr/bin/env node

const yargs = require('yargs')
const build = require('./build')

yargs
  .scriptName('create-figma-plugin')
  .command(build)
  .demandCommand()
  .help()
  .version()
  .parse()
