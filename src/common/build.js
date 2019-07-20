const buildManifest = require('./build-manifest')
const buildPlugin = require('./build-plugin')
const readConfig = require('./read-config')

async function build (isDevelopment) {
  const config = readConfig()
  await buildManifest(config)
  return buildPlugin(config, isDevelopment)
}

module.exports = build
