import sade from 'sade'
import { log } from '@create-figma-plugin/common'
import { build } from './build'
import { watch } from './watch'

sade('create-figma-plugin-build', true)
  .option('-d, --dev', 'Build in development mode', false)
  .option('-w, --watch', 'Build in development mode', false)
  .action(async function ({ dev: isDevelopment, watch: isWatch }) {
    if (isWatch) {
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
      return
    }
    log.info('Building plugin...')
    await build(isDevelopment)
    log.success('Done')
  })
  .parse(process.argv)
