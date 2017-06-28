module.exports = [
  {
    settings: {
      background: '#002B36',
      foreground: '#93A1A1'
    }
  },
  {
    name: 'Comment',
    scope: 'comment',
    settings: {
      fontStyle: 'italic',
      foreground: '#657B83'
    }
  },
  {
    name: 'String',
    scope: 'string',
    settings: {
      foreground: '#2AA198'
    }
  },
  {
    name: 'Regexp',
    scope: 'string.regexp',
    settings: {
      foreground: '#D30102'
    }
  },
  {
    name: 'Number',
    scope: 'constant.numeric',
    settings: {
      foreground: '#D33682'
    }
  },
  {
    name: 'Variable',
    scope: [
      'variable.language',
      'variable.other'
    ],
    settings: {
      foreground: '#268BD2'
    }
  },
  {
    name: 'Keyword',
    scope: 'keyword',
    settings: {
      foreground: '#859900'
    }
  },
  {
    name: 'Storage',
    scope: 'storage',
    settings: {
      fontStyle: 'bold',
      foreground: '#93A1A1'
    }
  },
  {
    name: 'Class name',
    scope: [
      'entity.name.class',
      'entity.name.type'
    ],
    settings: {
      fontStyle: '',
      foreground: '#CB4B16'
    }
  },
  {
    name: 'Function name',
    scope: 'entity.name.function',
    settings: {
      foreground: '#268BD2'
    }
  },
  {
    name: 'Variable start',
    scope: 'punctuation.definition.variable',
    settings: {
      foreground: '#859900'
    }
  },
  {
    name: 'Embedded code markers',
    scope: [
      'punctuation.section.embedded.begin',
      'punctuation.section.embedded.end'
    ],
    settings: {
      foreground: '#D30102'
    }
  },
  {
    name: 'Built-in constant',
    scope: [
      'constant.language',
      'meta.preprocessor'
    ],
    settings: {
      foreground: '#B58900'
    }
  },
  {
    name: 'Support.construct',
    scope: [
      'support.function.construct',
      'keyword.other.new'
    ],
    settings: {
      foreground: '#CB4B16'
    }
  },
  {
    name: 'User-defined constant',
    scope: [
      'constant.character',
      'constant.other'
    ],
    settings: {
      foreground: '#CB4B16'
    }
  },
  {
    name: 'Inherited class',
    scope: 'entity.other.inherited-class',
    settings: {
      foreground: '#6C71C4'
    }
  },
  {
    name: 'Function argument',
    scope: 'variable.parameter',
    settings: {}
  },
  {
    name: 'Tag name',
    scope: 'entity.name.tag',
    settings: {
      foreground: '#268BD2'
    }
  },
  {
    name: 'Tag start/end',
    scope: 'punctuation.definition.tag',
    settings: {
      foreground: '#657B83'
    }
  },
  {
    name: 'Tag attribute',
    scope: 'entity.other.attribute-name',
    settings: {
      foreground: '#93A1A1'
    }
  },
  {
    name: 'Library function',
    scope: 'support.function',
    settings: {
      foreground: '#268BD2'
    }
  },
  {
    name: 'Continuation',
    scope: 'punctuation.separator.continuation',
    settings: {
      foreground: '#D30102'
    }
  },
  {
    name: 'Library constant',
    scope: 'support.constant',
    settings: {}
  },
  {
    name: 'Library class/type',
    scope: [
      'support.type',
      'support.class'
    ],
    settings: {
      foreground: '#859900'
    }
  },
  {
    name: 'Library Exception',
    scope: 'support.type.exception',
    settings: {
      foreground: '#CB4B16'
    }
  },
  {
    name: 'Library variable',
    scope: 'support.other.variable',
    settings: {}
  },
  {
    name: 'Invalid',
    scope: 'invalid',
    settings: {}
  },
  {
    name: 'diff: header',
    scope: [
      'meta.diff',
      'meta.diff.header'
    ],
    settings: {
      background: '#b58900',
      fontStyle: 'italic',
      foreground: '#E0EDDD'
    }
  },
  {
    name: 'diff: deleted',
    scope: 'markup.deleted',
    settings: {
      background: '#eee8d5',
      fontStyle: '',
      foreground: '#dc322f'
    }
  },
  {
    name: 'diff: changed',
    scope: 'markup.changed',
    settings: {
      background: '#eee8d5',
      fontStyle: '',
      foreground: '#cb4b16'
    }
  },
  {
    name: 'diff: inserted',
    scope: 'markup.inserted',
    settings: {
      background: '#eee8d5',
      foreground: '#219186'
    }
  },
  {
    name: 'Markup Quote',
    scope: 'markup.quote',
    settings: {
      foreground: '#859900'
    }
  },
  {
    name: 'Markup Lists',
    scope: 'markup.list',
    settings: {
      foreground: '#B58900'
    }
  },
  {
    name: 'Markup Styling',
    scope: [
      'markup.bold',
      'markup.italic'
    ],
    settings: {
      foreground: '#D33682'
    }
  },
  {
    name: 'Markup Inline',
    scope: 'markup.inline.raw',
    settings: {
      fontStyle: '',
      foreground: '#2AA198'
    }
  },
  {
    name: 'Markup Headings',
    scope: 'markup.heading',
    settings: {
      foreground: '#268BD2'
    }
  },
  {
    name: 'Markup Setext Header',
    scope: 'markup.heading.setext',
    settings: {
      fontStyle: '',
      foreground: '#268BD2'
    }
  }
]
