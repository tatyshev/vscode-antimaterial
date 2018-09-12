module.exports = [
  {
    settings: {
      foreground: '#D5CED9'
    }
  },
  {
    name: 'Comment color',
    scope: [
      'comment',
      'markup.quote.markdown'
    ],
    settings: {
      foreground: '#64566B'
    }
  },
  {
    name: 'Text Color',
    scope: [
      'meta.template.expression.js',
      'constant.name.attribute.tag.jade',
      'punctuation.definition.metadata.markdown',
      'punctuation.definition.string.end.markdown',
      'punctuation.definition.string.begin.markdown'
    ],
    settings: {
      foreground: '#D5CED9'
    }
  },
  {
    name: 'Red',
    scope: [
      'variable',
      'support.variable',
      'entity.name.tag.yaml',
      'constant.character.entity.html',
      'source.css entity.name.tag.reference',
      'beginning.punctuation.definition.list.markdown',
      'source.css entity.other.attribute-name.parent-selector',
      'meta.structure.dictionary.json support.type.property-name'
    ],
    settings: {
      foreground: '#FC644D'
    }
  },
  {
    name: 'Orange',
    scope: [
      'markup.bold',
      'constant.numeric',
      'meta.group.regexp',
      'constant.other.php',
      'support.constant.ext.php',
      'constant.other.class.php',
      'support.constant.core.php',
      'fenced_code.block.language',
      'constant.other.caps.python',
      'entity.other.attribute-name',
      'support.type.exception.python',
      'source.css keyword.other.unit'
    ],
    settings: {
      foreground: '#ff9f2e'
    }
  },
  {
    name: 'Yellow',
    scope: [
      'markup.list',
      'text.xml string',
      'entity.name.type',
      'support.function',
      'text.html string',
      'meta.at-rule.extend',
      'entity.name.function',
      'entity.other.inherited-class',
      'entity.other.keyframe-offset.css',
      'text.html.markdown string.quoted',
      'meta.function-call.generic.python',
      'meta.at-rule.extend support.constant',
      'entity.other.attribute-name.class.jade',
      'source.css entity.other.attribute-name',
      'text.xml punctuation.definition.string',
      'text.html punctuation.definition.string'
    ],
    settings: {
      foreground: '#e9d7a5'
    }
  },
  {
    name: 'Pink',
    scope: [
      'markup.heading',
      'entity.name.tag',
      'variable.language.this.js',
      'variable.language.special.self.python'
    ],
    settings: {
      foreground: '#ff99c6'
    }
  },
  {
    name: 'Hot Pink',
    scope: [
      'punctuation.definition.interpolation',
      'punctuation.section.embedded.end.php',
      'punctuation.section.embedded.end.ruby',
      'punctuation.section.embedded.begin.php',
      'punctuation.section.embedded.begin.ruby',
      'punctuation.definition.template-expression'
    ],
    settings: {
      foreground: '#f92672'
    }
  },
  {
    name: 'Purple',
    scope: [
      'storage',
      'keyword',
      'meta.link',
      'meta.image',
      'markup.italic',
      'source.js support.type'
    ],
    settings: {
      foreground: '#c668ba'
    }
  },
  {
    name: 'Blue',
    scope: [
      'string.regexp'
    ],
    settings: {
      foreground: '#3b79c7'
    }
  },
  {
    name: 'Cyan',
    scope: [
      'constant',
      'support.class',
      'keyword.operator',
      'support.constant',
      'text.html.markdown string',
      'source.css support.function',
      'source.php support.function',
      'support.function.magic.python',
      'entity.other.attribute-name.id'
    ],
    settings: {
      foreground: '#74d3de'
    }
  },
  {
    name: 'Green',
    scope: [
      'string',
      'text.html.php string',
      'markup.inline.raw',
      'punctuation.definition.string',
      'punctuation.definition.markdown',
      'text.html meta.embedded source.js string',
      'text.html.php punctuation.definition.string',
      'text.html meta.embedded source.js punctuation.definition.string'
    ],
    settings: {
      foreground: '#a5f69c'
    }
  },
  {
    name: 'Font Underline',
    scope: [
      'entity.other.inherited-class'
    ],
    settings: {
      fontStyle: 'underline'
    }
  }
]
