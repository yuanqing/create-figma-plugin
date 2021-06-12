import { blue, green, red } from 'kleur/colors'

function clearPreviousLine(): void {
  process.stdout.moveCursor(0, -1)
  process.stdout.clearLine(1)
}

function clearViewport(): void {
  console.clear() // eslint-disable-line no-console
}

function error(message: string): void {
  console.error(`${red('error')} ${message}`) // eslint-disable-line no-console
}

function info(message: string): void {
  console.info(`${blue('info')} ${message}`) // eslint-disable-line no-console
}

function success(message: string): void {
  console.log(`${green('success')} ${message}`) // eslint-disable-line no-console
}

export const log = {
  clearPreviousLine,
  clearViewport,
  error,
  info,
  success
}
