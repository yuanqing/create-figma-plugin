import { logPrefixes } from './log-prefixes'

function error (message) {
  console.log(`${logPrefixes.error} ${message}`)
}

function info (message) {
  console.log(`${logPrefixes.info} ${message}`)
}

function question (message) {
  console.log(`${logPrefixes.question} ${message}`)
}

function success (message) {
  console.log(`${logPrefixes.success} ${message}`)
}

export const log = {
  error,
  info,
  question,
  success
}
