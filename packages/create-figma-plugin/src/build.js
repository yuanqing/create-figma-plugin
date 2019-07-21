const build = require('@create-figma-plugin/build')

const command = {
  command: 'build',
  describe: 'Builds the plugin',
  builder: function (yargs) {
    yargs.option('development', {
      alias: ['dev', 'd'],
      type: 'boolean',
      default: false
    })
    yargs.option('watch', {
      alias: ['w'],
      type: 'boolean',
      default: false
    })
  },
  handler: function ({ development, watch }) {
    return build(development, watch)
  }
}

module.exports = command
