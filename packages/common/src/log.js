import npmlog from 'npmlog'

npmlog.style.info.fg = 'blue'
function error (message) {
  npmlog.error('', message)
}

function info (message) {
  npmlog.info('', message)
}

npmlog.addLevel('success', 3001, { fg: 'green' })
function success (message) {
  npmlog.success('', message)
}

function silenceLogging () {
  npmlog.level = 'silent'
}

export const log = {
  error,
  info,
  silenceLogging,
  success
}
