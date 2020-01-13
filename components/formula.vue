<template lang="pug">
  span#latex {{ '$$' + result + '$$' }}
</template>

<script>
import { create, all } from 'mathjs'

export default {
  props: ['expression'],
  computed: {
    result() {
      try {
        const math = create(all)
        const latex = math.parse(this.expression).toTex()
        return latex
      } catch (error) {
        return ''
      }
    }
  },

  watch: {
    result(value) {
      const jax = window.MathJax.Hub.getAllJax('latex')[0]
      window.MathJax.Hub.Queue(['Text', jax, value])
    }
  },

  head: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML' }
    ]
  }
}

</script>
