export default function (buildOptions) {
  return {
    ...buildOptions,
    define: {
      global: 'window'
    }
  }
}
