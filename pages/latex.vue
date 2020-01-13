<template lang="pug">
  v-layout.align-center.justify-center.row
    v-flex.xs6
      v-card.pa-3
        v-container.grid-list-xs
          v-label Expression
          v-layout.row.wrap
            v-flex.xs6
              v-text-field(v-model="expression" solo prefix="=")
            v-flex.xs6
              v-sheet.align-center.justify-end.d-flex.pa-2(color="grey lighten-3" height="48" elevation="2")
                formula(:expression="expression")
      v-card.pa-3
        formula(expression="2*18")
        formula(expression="(7+12*d)/(15+2/3)+4")
</template>

<script>
import Formula from '~/components/formula'

export default {
  components: {
    Formula
  },

  data() {
    return {
      expression: '2+4/3'
    }
  }
}

</script>
