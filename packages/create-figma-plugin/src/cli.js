#!/usr/bin/env node

const build = require('@create-figma-plugin/build')
const init = require('@create-figma-plugin/init')
const sade = require('sade')

const cli = sade('create-figma-plugin')

cli.command('build', 'Build the plugin')
  .option('-d, --development', 'Build in development mode', false)
  .action(async function ({ development }) {
    await build(development, false)
  })

cli.command('init <name>', 'Scaffolds a new plugin', { default: true })
  .action(async function (name) {
    await init(name)
  })

cli.command('watch', 'Watch and rebuild on changes')
  .action(async function () {
    await build(true, true)
  })

cli.parse(process.argv)
