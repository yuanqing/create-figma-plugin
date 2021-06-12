import { blue, green, red } from 'kleur/colors'
const ESC = '\u001B['

function clearPreviousLine(): void {
  if (process.stdout.isTTY === false) {
    return
  }
  // Move cursor to start of previous line
  process.stdout.write(`${ESC}F`)
  // Delete from cursor to end of current line
  process.stdout.write(`${ESC}K`)
}

function clearViewport(): void {
  if (process.stdout.isTTY === false) {
    return
  }
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
