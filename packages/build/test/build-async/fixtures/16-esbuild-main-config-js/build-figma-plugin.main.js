export default function (buildOptions) {
  return {
    ...buildOptions,
    footer: {
      js: '// comment appended to main.js'
    }
  }
}
