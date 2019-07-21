#!/usr/bin/env node

const build = require('@create-figma-plugin/build')
const sade = require('sade')

const cli = sade('create-figma-plugin')

cli.command('build', 'Build the plugin', { default: true })
  .option('-d, --development', 'Build in development mode', false)
  .action(async function ({ development }) {
    await build(development, false)
  })

cli.command('watch', 'Watch and rebuild on changes')
  .action(async function () {
    await build(true, true)
  })

cli.parse(process.argv)
