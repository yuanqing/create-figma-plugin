const build = require('../common/build')

const command = {
  command: 'build',
  describe: 'Builds the plugin',
  builder: function (yargs) {
    yargs.option('development', {
      alias: ['dev', 'd'],
      type: 'boolean',
      default: false
    })
  },
  handler: function ({ development }) {
    return build(development)
  }
}

module.exports = command
