#!/usr/bin/env node

require('yargs')
  .scriptName('create-figma-plugin')
  .command(require('./commands/build'))
  .command(require('./commands/watch'))
  .demandCommand()
  .help()
  .version()
  .parse()
