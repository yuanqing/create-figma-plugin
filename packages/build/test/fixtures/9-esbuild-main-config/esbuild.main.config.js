module.exports = function (buildOptions) {
  return {
    ...buildOptions,
    footer: {
      js: '// comment appended to main.js'
    }
  }
}
