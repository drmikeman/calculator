<template lang="pug">
  div
    h3 {{ expr }}
    h3 Wynik: {{ result1 }} oraz {{ result2 }}
    h3 Referencje
    h4(v-for="ref in refs") {{ ref }}
</template>

<script>
import { create, all } from 'mathjs'

export default {
  data() {
    const math = create(all)
    const scope = { a: 1 }
    const expr = 'a+3+sum(a, a, 2)'
    const code = math.parse(expr)
    const result1 = code.evaluate(scope)
    const result2 = code.evaluate({ a: 3 })
    const refs = this.references(code)

    return {
      expr,
      result1,
      result2,
      refs
    }
  },
  methods: {
    references: function (code) {
      // eslint-disable-next-line no-console
      console.info('Node', code)

      const filtered = []

      code.traverse(function (node, path, parent) {
        switch (node.type) {
          case 'OperatorNode':
            // eslint-disable-next-line no-console
            console.log(node.type, node.op)
            break
          case 'ConstantNode':
            // eslint-disable-next-line no-console
            console.log(node.type, node.value)
            break
          case 'SymbolNode':
            // eslint-disable-next-line no-console
            console.log(node.type, node.name, path, parent)
            if (path !== 'fn') {
              filtered.push(node)
            }

            break
          // eslint-disable-next-line no-console
          default: console.log(node.type)
        }
      })

      return filtered.map(symbol => symbol.name)
    }
  }
}
</script>
