export default function (buildOptions) {
  return {
    ...buildOptions,
    footer: {
      js: '// comment appended to ui.js'
    }
  }
}
