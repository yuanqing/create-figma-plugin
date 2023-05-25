const rehypePrettyCodeTheme = {
  name: 'create-figma-plugin',
  semanticHighlighting: true,
  tokenColors: [
    {
      settings: {
        foreground: '#d4d4d4'
      }
    },
    {
      scope: ['comment'],
      settings: {
        foreground: '#878787'
      }
    },
    {
      scope: ['constant.numeric', 'string'],
      settings: {
        foreground: '#d1a8ff' // purple
      }
    },
    {
      scope: [
        'entity.name.tag',
        'keyword',
        'storage',
        'storage.type',
        'support.class.component.tsx',
        'support.type.property-name.json',
        'entity.other.attribute-name.class.css',
        'entity.other.attribute-name.id.css'
      ],
      settings: {
        foreground: '#7cc4f8' // blue
      }
    },
    {
      scope: [
        'entity.name.function',
        'entity.other.attribute-name',
        'support.type'
      ],
      settings: {
        foreground: '#79d297' // green
      }
    },
    {
      scope: [
        'constant.language.json',
        'variable.parameter',
        'variable.other.readwrite.ts',
        'variable.other.readwrite.tsx'
      ],
      settings: {
        foreground: '#f7d15f' // yellow
      }
    }
  ]
}

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
  rehypePrettyCodeTheme
}
