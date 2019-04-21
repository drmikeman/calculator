<template lang="pug">
  v-layout.align-center.justify-center.row
    v-flex.xs6
      v-card.pa-3
        v-container.grid-list-xs
          v-layout.row.wrap(v-for="(item, index) in expressions" :key="index")
            v-flex.xs10
              v-text-field(v-model="item.expression" solo prefix="=" :error-messages="item.errors")
            v-flex.xs2
              v-sheet.align-center.justify-end.d-flex.pa-2(color="success lighten-2" height="48" elevation="2").
                {{ item.result }}
          v-btn(fab dark small color="indigo" @click="add")
            v-icon(dark) add
</template>

<script>

import { Item } from '~/calculator/item'

export default {
  data() {
    return {
      expressions:
      [
        new Item('2*3'),
        new Item('5+8')
      ]
    }
  },
  methods: {
    add: function () {
      this.expressions.push({ expression: '' })
    }
  }
}
</script>
