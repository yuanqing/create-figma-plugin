export default {
  baseUrl: '/create-figma-plugin/',
  createTocText: function (text, { id }) {
    if (id !== 'utilities') {
      return text
    }
    const backQuoteRegex = /^`([^`]+)`$/
    const functionNameRegex = /^[^<(]+/
    return text.replace(backQuoteRegex, function (_, string) {
      const matches = string.match(functionNameRegex)
      const result = matches === null ? text : matches[0]
      return `\`${result}\``
    })
  },
  data: {
    page: {
      in: '[id].md',
      out: ['[id]/', '/']
    }
  },
  dataDirectory: 'docs',
  filterToc: function (_, { level }) {
    return level !== 1
  },
  rehypePrettyCodeTheme: 'github-dark'
}
