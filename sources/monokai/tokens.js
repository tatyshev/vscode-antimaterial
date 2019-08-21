module.exports = [
  {
    "scope": [
      "comment",
      "comment keyword",
      "comment markup.underline.link",
      "comment string",
      "comment punctuation.definition",
      "comment punctuation",
      "comment text"
    ],
    "settings": {
      "name": "Comments and overrides inside comments",
      "fontStyle": "italic",
      "foreground": "#6e7066"
    }
  },
  {
    "scope": "comment storage.type",
    "settings": {
      "name": "JSDoc storage type",
      "foreground": "#6e7066"
    }
  },
  {
    "scope": "comment entity.name.type",
    "settings": {
      "name": "JSDoc entity name",
      "foreground": "#c0c1b5"
    }
  },
  {
    "scope": [
      "comment variable",
      "comment variable.other"
    ],
    "settings": {
      "name": "JSDoc variable",
      "foreground": "#c0c1b5"
    }
  },
  {
    "scope": "comment keyword.codetag.notation",
    "settings": {
      "name": "Comment TODO / FIXME (at least in VSCode Python)",
      "foreground": "#ae81ff"
    }
  },
  {
    "scope": "comment.git-status.header.remote",
    "settings": {
      "name": "git status remote",
      "foreground": "#f82570"
    }
  },
  {
    "scope": "comment.git-status.header.local",
    "settings": {
      "name": "git status local",
      "foreground": "#66d9ee"
    }
  },
  {
    "scope": "comment.other.git-status.head",
    "settings": {
      "name": "git status remote",
      "foreground": "#fdfff1"
    }
  },
  {
    "scope": "constant",
    "settings": {
      "name": "Constant",
      "foreground": "#ae81ff"
    }
  },
  {
    "scope": "constant.other",
    "settings": {
      "name": "Constant",
      "foreground": "#fdfff1"
    }
  },
  {
    "scope": "constant.other.php",
    "settings": {
      "name": "Constant",
      "foreground": "#ae81ff"
    }
  },
  {
    "scope": "constant.other.property",
    "settings": {
      "name": "Constant as property",
      "foreground": "#ae81ff"
    }
  },
  {
    "scope": "constant.other.citation.latex",
    "settings": {
      "name": "Constant in latex",
      "foreground": "#ae81ff"
    }
  },
  {
    "scope": "constant.other.color",
    "settings": {
      "name": "Constant as color (in css / sass)",
      "foreground": "#ae81ff"
    }
  },
  {
    "scope": "constant.other.character-class.escape",
    "settings": {
      "name": "Constant as character class escape (e.g. in regex)",
      "foreground": "#ae81ff"
    }
  },
  {
    "scope": "constant.other.key",
    "settings": {
      "name": "Constant as key (e.g. in puppet manifests)",
      "foreground": "#ae81ff"
    }
  },
  {
    "scope": "constant.other.symbol",
    "settings": {
      "name": "Constant as symbol (e.g. in ruby)",
      "foreground": "#fc961f"
    }
  },
  {
    "scope": "constant.numeric",
    "settings": {
      "name": "Number",
      "foreground": "#ae81ff"
    }
  },
  {
    "scope": "constant.language",
    "settings": {
      "name": "Constant",
      "foreground": "#ae81ff"
    }
  },
  {
    "scope": "constant.character.escape",
    "settings": {
      "name": "Character escape",
      "foreground": "#ae81ff"
    }
  },
  {
    "scope": "constant.numeric.line-number.find-in-files",
    "settings": {
      "name": "Search result line numbers",
      "foreground": "#57584f"
    }
  },
  {
    "scope": "constant.numeric.line-number.match.find-in-files",
    "settings": {
      "name": "Search result matched line numbes",
      "foreground": "#e4db73"
    }
  },
  {
    "scope": "entity.name.section",
    "settings": {
      "name": "Sections",
      "foreground": "#e4db73"
    }
  },
  {
    "scope": "entity.name.function",
    "settings": {
      "name": "Functions",
      "foreground": "#a6e12d"
    }
  },
  {
    "scope": "entity.name",
    "settings": {
      "name": "Entity name",
      "foreground": "#a6e12d"
    }
  },
  {
    "scope": "entity.name.class",
    "settings": {
      "name": "Class name",
      "foreground": "#66d9ee"
    }
  },
  {
    "scope": "entity.name.constant",
    "settings": {
      "name": "Constant name",
      "foreground": "#ae81ff"
    }
  },
  {
    "scope": "entity.name.namespace",
    "settings": {
      "name": "Namespace",
      "foreground": "#fdfff1"
    }
  },
  {
    "scope": "entity.other.inherited-class",
    "settings": {
      "name": "Inherited class",
      "fontStyle": "italic",
      "foreground": "#66d9ee"
    }
  },
  {
    "scope": "entity.name.function",
    "settings": {
      "name": "Function name",
      "foreground": "#a6e12d"
    }
  },
  {
    "scope": [
      "entity.name.tag",
      "entity.name.tag.js.jsx support.class.component.js.jsx",
      "entity.name.tag support.class.component"
    ],
    "settings": {
      "name": "Tag name",
      "foreground": "#f82570"
    }
  },
  {
    "scope": "entity.other.attribute-name",
    "settings": {
      "name": "Tag attribute",
      "fontStyle": "italic",
      "foreground": "#66d9ee"
    }
  },
  {
    "scope": [
      "entity.other.attribute-name.class.css",
      "entity.other.attribute-name.parent-selector-suffix.css",
      "entity.other.attribute-name.parent-selector-suffix.css punctuation.definition.entity.css",
      "entity.other.attribute-name.css"
    ],
    "settings": {
      "name": "CSS class",
      "foreground": "#a6e12d"
    }
  },
  {
    "scope": "entity.other.attribute-name.id.css",
    "settings": {
      "name": "CSS id",
      "foreground": "#fc961f"
    }
  },
  {
    "scope": [
      "entity.other.attribute-name.pseudo-class.css",
      "entity.other.pseudo-class.css",
      "entity.other.pseudo-element.css"
    ],
    "settings": {
      "name": "CSS pseudo class",
      "fontStyle": "italic",
      "foreground": "#66d9ee"
    }
  },
  {
    "scope": [
      "entity.name.function",
      "support.function"
    ],
    "settings": {
      "name": "Function names / calls",
      "foreground": "#a6e12d"
    }
  },
  {
    "scope": "entity.other.git-status.hex",
    "settings": {
      "name": "git status commit hex",
      "foreground": "#ae81ff"
    }
  },
  {
    "scope": "invalid",
    "settings": {
      "name": "Invalid",
      "fontStyle": "italic"
    }
  },
  {
    "scope": "keyword",
    "settings": {
      "name": "Keyword",
      "foreground": "#f82570"
    }
  },
  {
    "scope": "keyword.control",
    "settings": {
      "name": "Control keywords examples include if, try, end and while. Some syntaxes prefer to mark if and else with the conditional variant. The import variant is often used in appropriate situations.",
      "foreground": "#f82570"
    }
  },
  {
    "scope": "keyword.operator",
    "settings": {
      "name": "Operator",
      "foreground": "#f82570"
    }
  },
  {
    "scope": "keyword.other.substitution",
    "settings": {
      "name": "Substitution string",
      "foreground": "#919288"
    }
  },
  {
    "scope": [
      "keyword.other.template.begin",
      "keyword.other.template.end"
    ],
    "settings": {
      "name": "Template literal begin / end",
      "foreground": "#f82570"
    }
  },
  {
    "scope": [
      "keyword.operator.heading.restructuredtext",
      "keyword.operator.table.row.restructuredtext keyword.operator.table.data.restructuredtext"
    ],
    "settings": {
      "name": "RestructuredText heading, table markup",
      "foreground": "#919288"
    }
  },
  {
    "scope": "markup.italic",
    "settings": {
      "name": "Italic",
      "fontStyle": "italic"
    }
  },
  {
    "scope": "markup.bold",
    "settings": {
      "name": "Bold",
      "fontStyle": "bold"
    }
  },
  {
    "scope": "markup.heading",
    "settings": {
      "name": "Heading",
      "foreground": "#e4db73"
    }
  },
  {
    "scope": "markup.raw",
    "settings": {
      "name": "Raw",
      "foreground": "#fc961f"
    }
  },
  {
    "scope": "markup.underline",
    "settings": {
      "name": "Underline",
      "fontStyle": "underline"
    }
  },
  {
    "scope": "markup.underline.link",
    "settings": {
      "name": "Link",
      "foreground": "#a6e12d"
    }
  },
  {
    "scope": [
      "markup.inserted",
      "markup.inserted punctuation.definition.inserted"
    ],
    "settings": {
      "name": "Diff inserted",
      "foreground": "#a6e12d"
    }
  },
  {
    "scope": [
      "markup.deleted",
      "markup.deleted punctuation.definition.deleted"
    ],
    "settings": {
      "name": "Diff deleted",
      "foreground": "#f82570"
    }
  },
  {
    "scope": [
      "markup.changed",
      "markup.changed punctuation.definition.changed"
    ],
    "settings": {
      "name": "Diff changed",
      "foreground": "#e4db73"
    }
  },
  {
    "scope": [
      "markup.ignored",
      "markup.ignored punctuation.definition.ignored"
    ],
    "settings": {
      "name": "Diff ignored",
      "foreground": "#919288"
    }
  },
  {
    "scope": "markup.untracked",
    "settings": {
      "name": "Diff untracked",
      "foreground": "#919288"
    }
  },
  {
    "scope": "markup.quote",
    "settings": {
      "name": "Markup quote",
      "fontStyle": "italic"
    }
  },
  {
    "scope": [
      "meta.brace.round",
      "meta.brace.square",
      "meta.brace.curly",
      "meta.delimiter.comma.js",
      "meta.function-call.without-arguments.js",
      "meta.function-call.method.without-arguments.js"
    ],
    "settings": {
      "name": "Braces, delimiters",
      "foreground": "#919288"
    }
  },
  {
    "scope": [
      "meta.function-call.python",
      "meta.function-call.arguments.python meta.function-call.python"
    ],
    "settings": {
      "name": "Function call",
      "foreground": "#a6e12d"
    }
  },
  {
    "scope": "meta.function-call.python meta.function-call.arguments.python",
    "settings": {
      "name": "Function arguments",
      "foreground": "#fdfff1"
    }
  },
  {
    "scope": "meta.instance.constructor",
    "settings": {
      "name": "Constructor (new MyClass())",
      "foreground": "#a6e12d"
    }
  },
  {
    "scope": [
      "meta.attribute-with-value.class string",
      "meta.attribute.class.html string"
    ],
    "settings": {
      "name": "Class string name (i.e. in html attributes)",
      "foreground": "#a6e12d"
    }
  },
  {
    "scope": [
      "meta.attribute-with-value.id string",
      "meta.attribute.id.html string"
    ],
    "settings": {
      "name": "ID string name (i.e. in html attributes)",
      "foreground": "#fc961f"
    }
  },
  {
    "scope": [
      "source.json meta.structure.dictionary",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
      "source.json meta.structure.dictionary string",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
      "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string"
    ],
    "settings": {
      "name": "JSON keys (and invisibles)",
      "foreground": "#fdfff1"
    }
  },
  {
    "scope": [
      "source.json meta.structure.dictionary.value string",
      "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
      "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
      "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
      "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
      "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
      "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
      "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
      "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
      "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
      "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
      "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
      "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
      "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
      "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
      "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string"
    ],
    "settings": {
      "name": "JSON values",
      "foreground": "#e4db73"
    }
  },
  {
    "scope": "meta.object.member",
    "settings": {
      "name": "Object members",
      "foreground": "#fdfff1"
    }
  },
  {
    "scope": "meta.property-list.css variable.other",
    "settings": {
      "name": "SCSS Variable",
      "foreground": "#fc961f"
    }
  },
  {
    "scope": [
      "entity.name.constant.preprocessor",
      "meta.preprocessor"
    ],
    "settings": {
      "name": "Preprocessor",
      "foreground": "#ae81ff"
    }
  },
  {
    "scope": "meta.diff.git-diff.header",
    "settings": {
      "name": "git diff header",
      "foreground": "#e4db73"
    }
  },
  {
    "scope": "punctuation",
    "settings": {
      "name": "Punctuation",
      "foreground": "#919288"
    }
  },
  {
    "scope": [
      "punctuation.definition.tag",
      "punctuation.definition.tag source",
      "punctuation.definition.group.begin.ruby",
      "punctuation.definition.group.end.ruby",
      "punctuation.definition.group.begin.css",
      "punctuation.definition.group.end.css",
      "punctuation.definition.string.end.html source.css"
    ],
    "settings": {
      "name": "Punctuation tags",
      "foreground": "#919288"
    }
  },
  {
    "scope": "punctuation.definition.group",
    "settings": {
      "name": "Group (i.e. in regex)",
      "foreground": "#fdfff1"
    }
  },
  {
    "scope": "punctuation.definition.comment",
    "settings": {
      "name": "Comment start / end",
      "foreground": "#6e7066"
    }
  },
  {
    "scope": [
      "punctuation.definition.variable",
      "punctuation.definition.keyword.scss",
      "punctuation.definition.entity.css"
    ],
    "settings": {
      "name": "Variable indicator (i.e. in php or in include directives in sass)",
      "foreground": "#c0c1b5"
    }
  },
  {
    "scope": [
      "punctuation.section.embedded",
      "punctuation.section.embedded entity.name.tag",
      "punctuation.section.embedded constant.other",
      "punctuation.section.embedded source"
    ],
    "settings": {
      "name": "Punctuation section embedded (i.e. ?php blocks in html)",
      "foreground": "#fc961f"
    }
  },
  {
    "scope": [
      "punctuation.template-string.element.begin",
      "punctuation.template-string.element.end",
      "punctuation.definition.string.template.begin",
      "punctuation.definition.string.template.end",
      "string.quoted.template punctuation.definition.string.begin",
      "string.quoted.template punctuation.definition.string.end"
    ],
    "settings": {
      "name": "Punctuation template string (`example`)",
      "foreground": "#f82570"
    }
  },
  {
    "scope": [
      "meta.paragraph.markdown meta.dummy.line-break",
      "meta.paragraph.markdown meta.hard-line-break.markdown"
    ],
    "settings": {
      "Name": "Punctuation hard line break in Markdown",
      "background": "#ae81ff"
    }
  },
  {
    "scope": "region.redish",
    "settings": {
      "name": "region red color",
      "foreground": "#f82570",
      "background": "#f8257059"
    }
  },
  {
    "scope": "region.orangish",
    "settings": {
      "name": "region orange color",
      "foreground": "#fc961f",
      "background": "#fc961f59"
    }
  },
  {
    "scope": "region.yellowish",
    "settings": {
      "name": "region yellow color",
      "foreground": "#e4db73",
      "background": "#e4db7359"
    }
  },
  {
    "scope": "region.greenish",
    "settings": {
      "name": "region green color",
      "foreground": "#a6e12d",
      "background": "#a6e12d59"
    }
  },
  {
    "scope": "region.bluish",
    "settings": {
      "name": "region blue color",
      "foreground": "#66d9ee",
      "background": "#66d9ee59"
    }
  },
  {
    "scope": "region.purplish",
    "settings": {
      "name": "region purple color",
      "foreground": "#ae81ff",
      "background": "#ae81ff59"
    }
  },
  {
    "scope": "region.pinkish",
    "settings": {
      "name": "region pink color",
      "foreground": "#f82570",
      "background": "#f8257059"
    }
  },
  {
    "scope": "region.whitish",
    "settings": {
      "name": "White for ST3 for non-colorized scheme",
      "foreground": "#FFFFFF"
    }
  },
  {
    "scope": "source",
    "settings": {
      "name": "source",
      "foreground": "#fdfff1"
    }
  },
  {
    "scope": [
      "source.scss",
      "source.sass"
    ],
    "settings": {
      "name": "SASS, SCSS default",
      "foreground": "#919288"
    }
  },
  {
    "scope": [
      "source.sass variable.other",
      "source.sass variable.sass",
      "source.scss variable.other",
      "source.scss variable.scss",
      "source.scss variable.sass",
      "source.css variable.other",
      "source.css variable.scss",
      "source.less variable.other",
      "source.less variable.other.less",
      "source.less variable.declaration.less"
    ],
    "settings": {
      "name": "SASS, SCSS and LESS variables",
      "fontStyle": "italic",
      "foreground": "#fc961f"
    }
  },
  {
    "scope": "source.git-show.commit.sha",
    "settings": {
      "name": "git",
      "foreground": "#ae81ff"
    }
  },
  {
    "scope": [
      "source.git-show.author",
      "source.git-show.date",
      "source.git-diff.command",
      "source.git-diff.command meta.diff.git-diff.header.from-file",
      "source.git-diff.command meta.diff.git-diff.header.to-file"
    ],
    "settings": {
      "name": "git",
      "foreground": "#919288"
    }
  },
  {
    "scope": [
      "source.git-show meta.diff.git-diff.header.extended.index.from-sha",
      "source.git-show meta.diff.git-diff.header.extended.index.to-sha"
    ],
    "settings": {
      "name": "git diff header hash",
      "foreground": "#ae81ff"
    }
  },
  {
    "scope": "source.git-show meta.diff.range.unified",
    "settings": {
      "name": "git diff header range",
      "foreground": "#fc961f"
    }
  },
  {
    "scope": [
      "source.git-show meta.diff.header.from-file",
      "source.git-show meta.diff.header.to-file"
    ],
    "settings": {
      "name": "git diff header files",
      "foreground": "#919288"
    }
  },
  {
    "scope": "storage",
    "settings": {
      "name": "Storage",
      "foreground": "#f82570"
    }
  },
  {
    "scope": "storage.type",
    "settings": {
      "name": "Types and definition/declaration keywords should use the following scope. Examples include int, bool, char, func, function, class and def. Depending on the language and semantics, const may be this or storage.modifier.",
      "fontStyle": "italic",
      "foreground": "#66d9ee"
    }
  },
  {
    "scope": "storage.type.extends",
    "settings": {
      "name": "Extends",
      "fontStyle": "normal",
      "foreground": "#f82570"
    }
  },
  {
    "scope": "storage.type.function.arrow",
    "settings": {
      "name": "Fat arrow function",
      "fontStyle": "normal",
      "foreground": "#f82570"
    }
  },
  {
    "scope": "storage.modifier",
    "settings": {
      "name": "Keywords that affect the storage of a variable, function or data structure should use the following scope. Examples include static, inline, const, public and private.",
      "fontStyle": "italic",
      "foreground": "#f82570"
    }
  },
  {
    "scope": "storage.class.restructuredtext.ref",
    "settings": {
      "name": "refs (Restructured text)",
      "foreground": "#ae81ff"
    }
  },
  {
    "scope": "string",
    "settings": {
      "name": "String",
      "foreground": "#e4db73"
    }
  },
  {
    "scope": "string.unquoted.label",
    "settings": {
      "name": "String label",
      "foreground": "#fdfff1"
    }
  },
  {
    "scope": "string source",
    "settings": {
      "name": "Source in template string",
      "foreground": "#fdfff1"
    }
  },
  {
    "scope": "string source punctuation.section.embedded",
    "settings": {
      "name": "Embedded punctuation begin / end in template string",
      "foreground": "#919288"
    }
  },
  {
    "scope": [
      "string.other.link.title",
      "string.other.link.description"
    ],
    "settings": {
      "name": "link title",
      "foreground": "#f82570"
    }
  },
  {
    "scope": "string.other.link.description.title",
    "settings": {
      "name": "link description",
      "foreground": "#66d9ee"
    }
  },
  {
    "scope": [
      "string.regexp punctuation.definition.string.begin",
      "string.regexp punctuation.definition.string.end"
    ],
    "settings": {
      "name": "String regexp begin / end",
      "foreground": "#f82570"
    }
  },
  {
    "scope": [
      "string.other.ref",
      "string.other.restructuredtext.ref"
    ],
    "settings": {
      "name": "refs (Restructured text)",
      "foreground": "#a6e12d"
    }
  },
  {
    "scope": "string.other.git-status.help.key",
    "settings": {
      "name": "git key in git status help text",
      "foreground": "#c0c1b5"
    }
  },
  {
    "scope": "string.other.git-status.remote",
    "settings": {
      "name": "git status remote",
      "foreground": "#f82570"
    }
  },
  {
    "scope": "support.constant",
    "settings": {
      "name": "Library constant",
      "foreground": "#66d9ee"
    }
  },
  {
    "scope": "support.constant.handlebars",
    "settings": {
      "name": "Handlebars start / end",
      "foreground": "#919288"
    }
  },
  {
    "scope": "support.type.vendor-prefix.css",
    "settings": {
      "name": "vendor prefix",
      "foreground": "#c0c1b5"
    }
  },
  {
    "scope": "support.function",
    "settings": {
      "name": "Function name",
      "foreground": "#a6e12d"
    }
  },
  {
    "scope": [
      "support.type",
      "entity.name.type.object.console"
    ],
    "settings": {
      "name": "Library type",
      "fontStyle": "italic",
      "foreground": "#66d9ee"
    }
  },
  {
    "scope": "support.variable",
    "settings": {
      "name": "Support variables",
      "foreground": "#66d9ee"
    }
  },
  {
    "scope": "support.type.property-name",
    "settings": {
      "name": "Library type property",
      "fontStyle": "normal",
      "foreground": "#fdfff1"
    }
  },
  {
    "scope": "support.class",
    "settings": {
      "name": "Library class",
      "foreground": "#66d9ee"
    }
  },
  {
    "scope": "text",
    "settings": {
      "name": "text",
      "foreground": "#fdfff1"
    }
  },
  {
    "scope": "text.find-in-files",
    "settings": {
      "name": "Search result",
      "foreground": "#fdfff1"
    }
  },
  {
    "scope": [
      "variable",
      "variable.other"
    ],
    "settings": {
      "name": "Variable",
      "foreground": "#fdfff1"
    }
  },
  {
    "scope": [
      "variable.parameter",
      "parameters variable.function"
    ],
    "settings": {
      "name": "Function arguments",
      "fontStyle": "italic",
      "foreground": "#fc961f"
    }
  },
  {
    "scope": [
      "variable.language",
      "variable.parameter.function.language.special.self.python"
    ],
    "settings": {
      "name": "Reserved variable names that are specified by the language, such as this, self, super, arguments. Also in function arguments (e.g. like in Python)",
      "fontStyle": "italic",
      "foreground": "#c0c1b5"
    }
  },
  {
    "scope": "variable.language.arguments",
    "settings": {
      "name": "Reserved variable names: 'arguments'",
      "foreground": "#ae81ff"
    }
  },
  {
    "scope": "variable.other.class",
    "settings": {
      "name": "Library function",
      "foreground": "#66d9ee"
    }
  },
  {
    "scope": "variable.other.constant",
    "settings": {
      "name": "Immutable variables, often via a const modifier, should receive the following scope. Depending on the language and semantics, entity.name.constant may be a better choice.",
      "foreground": "#ae81ff"
    }
  },
  {
    "scope": "variable.other.member",
    "settings": {
      "name": "Fields, properties, members and attributes of a class or other data structure should use:",
      "foreground": "#fdfff1"
    }
  },
  {
    "scope": "variable.function",
    "settings": {
      "name": "Function and method names should be scoped using the following, but only when they are being invoked. When defined, they should use entity.name.function.",
      "foreground": "#a6e12d"
    }
  },
  {
    "scope": "variable.other.substitution",
    "settings": {
      "name": "Substitution (restructured text)",
      "foreground": "#fc961f"
    }
  },
  {
    "scope": [
      "source.ruby variable.other.readwrite.instance.ruby",
      "source.ruby variable.other.readwrite.class.ruby"
    ],
    "settings": {
      "name": "Ruby instance variables",
      "foreground": "#ae81ff"
    }
  }
];