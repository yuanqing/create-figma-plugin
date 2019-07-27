import sade from 'sade'
import { log } from '@create-figma-plugin/common'
import { build } from './build'

sade('create-figma-plugin-build', true)
  .option('-d, --dev', 'Build in development mode', false)
  .action(async function ({ dev }) {
    log.info('Building plugin...')
    await build(dev)
    log.success('Done')
  })
  .parse(process.argv)
