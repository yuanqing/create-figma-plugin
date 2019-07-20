const watch = require('../common/watch')

const command = {
  command: 'watch',
  describe: 'Rebuilds the plugin on changes',
  handler: function () {
    return watch()
  }
}

module.exports = command
