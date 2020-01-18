<template lang="pug">
  span(ref="display") {{ '$$' + expression + '$$' }}
</template>

<script>
// import { create, all } from 'mathjs'

export default {
  props: ['expression'],

  watch: {
    expression: function (value) {
      this.updateDisplay()
    }
  },

  mounted: function () {
    window.MathJax = {
      options: {
        renderActions: {
          addMenu: [0, '', '']
        }
      }
    }
  },

  methods: {
    updateDisplay() {
      try {
        // const math = create(all)
        const latex = this.expression // math.parse(value).toTex()

        const display = this.$refs.display
        display.innerHTML = ''
        console.log("Watch", latex, display) //eslint-disable-line

        window.MathJax.tex2chtmlPromise(latex).then(function (node) {
          display.appendChild(node)
          window.MathJax.startup.document.clear()
          window.MathJax.startup.document.updateDocument()
        })
      } catch (error) {
        console.log(error) //eslint-disable-line
      }
    }
  },

  head: {
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js' }
    ]
  }
}

</script>

<style>
mjx-mpadded {
  border-width: 1px !important;
}
</style>
