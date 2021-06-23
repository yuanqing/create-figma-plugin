module.exports = function (buildOptions) {
  return {
    ...buildOptions,
    footer: {
      js: '// comment appended to ui.js'
    }
  }
}
