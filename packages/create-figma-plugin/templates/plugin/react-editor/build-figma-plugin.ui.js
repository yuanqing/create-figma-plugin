module.exports = function (buildOptions) {
  return {
    ...buildOptions,
    define: {
      global: 'window'
    }
  }
}
