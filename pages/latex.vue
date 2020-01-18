<template lang="pug">
  v-layout.align-center.justify-center.row
    v-flex.xs6
      v-card.pa-3
        v-container.grid-list-xs
          v-label Expressions
          v-layout.row.wrap(v-for="expression in expressions")
            v-flex.xs6
              v-text-field(v-model="expression.tex" solo prefix="=" height="72")
            v-flex.xs6
              v-sheet.align-center.justify-end.d-flex.pa-2(height="72" elevation="2")
                formula(:expression="expression.tex")
      v-card.pa-3
        formula(expression="")
        formula(expression="")
        formula(expression="")
        formula(expression="")
        formula(expression="")
</template>

<script>
import Formula from '~/components/formula'

export default {
  components: {
    Formula
  },

  data() {
    return {
      expressions: [
        { tex: '2+4/3' },
        { tex: '\\bf{\\$}+{\\color{white}\\fcolorbox{black}{darkgray}{x}}' },
        { tex: '\\fcolorbox{darkgray}{Goldenrod}{a}*\\fcolorbox{darkgray}{lightblue}{Power}' },
        { tex: '\\sum{\\fcolorbox{black}{lightgray}{Elements}}' },
        { tex: '\\sum{ {\\color{orange}\\fcolorbox{black}{orange}{E}} }' },
        { tex: 'max(\\fcolorbox{black}{Lavender}{a}+1, \\fcolorbox{black}{Cyan}{b}+1, \\fcolorbox{black}{Orchid}{c}+1)' }
      ]
    }
  }
}

</script>
