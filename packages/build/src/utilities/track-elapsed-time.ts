export function trackElapsedTime(): () => void {
  const time = process.hrtime()
  return function (): string {
    const elapsedTime = process.hrtime(time)
    return `${(elapsedTime[0] + elapsedTime[1] / 1e9).toFixed(3)}s`
  }
}
