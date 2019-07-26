import sade from 'sade'
import { build, watch } from '@create-figma-plugin/build'
import { log } from '@create-figma-plugin/common'
import { init } from '@create-figma-plugin/init'

const cli = sade('create-figma-plugin')

cli
  .command('build', 'Build the plugin')
  .option('-d, --development', 'Build in development mode', false)
  .action(async function ({ development }) {
    log.info('Building plugin...')
    await build(development)
    log.success('Done')
  })

cli
  .command('init [name]', 'Scaffold a new plugin', { default: true })
  .option('-t, --template', 'Use a template')
  .option('-y, --yes', 'Use defaults', false)
  .action(async function (name, { yes, template }) {
    log.info('Scaffolding a new plugin...')
    await init({ name, template }, yes)
    log.success('Done')
  })

cli
  .command('watch', 'Watch and rebuild the plugin on changes')
  .action(function () {
    watch(
      function () {
        log.info('Building plugin...')
      },
      function () {
        log.success('Done')
        log.info('Watching...')
      },
      function (file) {
        log.info(`Changed: ${file}`)
      }
    )
  })

cli.parse(process.argv)
