import * as npmlog from 'npmlog'

npmlog.disp.error = 'error'
npmlog.style.error = {
  fg: 'red'
}
function error(message: string): void {
  npmlog.error('', message)
}

npmlog.style.info.fg = 'blue'
function info(message: string): void {
  npmlog.info('', message)
}

npmlog.addLevel('success', 3001, { fg: 'green' })
function success(message: string): void {
  npmlog.success('', message)
}

export const log = {
  error,
  info,
  success
}
