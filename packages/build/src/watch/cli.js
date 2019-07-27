import sade from 'sade'
import { log } from '@create-figma-plugin/common'
import { watch } from './watch'

sade('create-figma-plugin-watch', true)
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
  .parse(process.argv)
