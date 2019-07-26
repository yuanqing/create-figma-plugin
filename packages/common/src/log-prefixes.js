import chalk from 'chalk'

const error = chalk.red('error')
const info = chalk.blue('info')
const question = chalk.gray('question')
const success = chalk.green('success')

export const logPrefixes = {
  error,
  info,
  question,
  success
}
