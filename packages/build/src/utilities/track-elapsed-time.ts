export function trackElapsedTime(): () => void {
  const time = process.hrtime()
  return function (): string {
    return formatTime(process.hrtime(time))
  }
}

function formatTime(time: [number, number]): string {
  if (time[0] === 0) {
    return `${(time[1] / 1e6).toFixed(0)}ms`
  }
  return `${(time[0] + time[1] / 1e9).toFixed(2)}s`
}
