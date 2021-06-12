import { yellow } from 'kleur/colors'

export function trackElapsedTime(): () => string {
  const time = process.hrtime()
  return function (): string {
    const elapsedTime = process.hrtime(time)
    const duration = elapsedTime[0] + elapsedTime[1] / 1e9
    return yellow(`${duration.toFixed(3)}s`)
  }
}
