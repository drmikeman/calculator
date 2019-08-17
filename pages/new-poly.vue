<template lang="pug">
  v-layout.row
    v-card.elevation-5
      .function__header {{ name }}
      v-layout.row.justify-center.pa-3
        table.argument(v-for="argument in params")
          template(v-if="argument.type === 'sequence'")
            tr
              th(:colspan="argument.values.length") {{ argument.name }}
            tr
              td(v-for="value in argument.values") &nbsp;
          template(v-else)
            tr
              th {{ argument.name }}
            tr
              td &nbsp;
      v-layout.part.row.justify-center.pa-3
        table.board
          tr
            th(v-for="column in columns" :class="column.class") {{ column.name }}
          tr(v-for="(_, i) in columns[0].cells")
            template(v-for="column in columns")
              td(
                v-if="!column.cells[i].skip"
                :rowspan="column.cells[i].span"
                :class="[column.class, column.cells[i].color]"
              )
                span(v-if="column.cells[i].expression") =&thinsp;{{ column.cells[i].expression }}
                span(v-else) &nbsp;
      .function__footer result
      .result =&thinsp;{{ result.expression }}

    v-card.example.elevation-5
      .function__header Example
      v-layout.row.justify-center.pa-3
        table.argument(v-for="argument in params")
          template(v-if="argument.type === 'sequence'")
            tr
              th(:colspan="argument.values.length") {{ argument.name }}
            tr
              td(v-for="value in argument.values") {{ value }}
          template(v-else)
            tr
              th {{ argument.name }}
            tr
              td {{ argument.value }}
      v-layout.part.row.justify-center.pa-3
        table.board
          tr
            th(v-for="column in columns" :class="column.class") {{ column.name }}
          tr(v-for="(_, i) in columns[0].cells")
            template(v-for="column in columns")
              td(:class="[column.class, column.cells[i].color]") {{ column.cells[i].value }}
      .function__footer result
      .result {{ result.value }}
</template>

<script>

export default {
  data() {
    return {
      name: 'Polynomial',
      params: [
        { name: 'x', type: 'value', value: 1 },
        { name: 'a', type: 'sequence', values: [2, 5, 6] }
      ],
      rows: 3,
      columns: [
        {
          name: 'a',
          class: 'shadow-column',
          cells: [
            { value: 2, color: 'index-slot' },
            { value: 5, color: 'index-slot' },
            { value: 6, color: 'index-slot' }
          ]
        },
        {
          name: 'Power',
          class: 'standard-column',
          cells: [
            { value: 1, expression: '1' },
            { value: 1, color: 'blue-slot', expression: '$*x', span: 2 },
            { value: 1, color: 'blue-slot', skip: true }
          ]
        },
        {
          name: 'Element',
          class: 'standard-column',
          cells: [
            { value: 2, expression: 'First(a)' },
            { value: 5, color: 'pink-slot', expression: 'a*Power', span: 2 },
            { value: 6, color: 'pink-slot', skip: true }
          ]
        }
      ],
      result: {
        expression: 'Sum(Element)',
        value: 13
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '~vuetify/src/stylus/app.styl'

.function__header
  background-color: #558b2f
  border: 1px solid black
  color: white
  font-size: 1.5rem
  font-weight: 600
  padding: 0.3rem 0.5rem
  text-align: center

.function__footer
  background-color: #558b2f
  border: 1px solid black
  color: white
  font-size: 1.2rem
  font-weight: 600
  padding: 0.3rem 0.5rem
  text-align: center

.argument
  border-collapse: collapse
  font-size: 1.2rem
  text-align: center
  margin-right: 1rem

  &:last-child
    margin: 0rem

  th
    background-color: #616161
    border: 1px solid black
    color: white
    font-weight: bold
    padding: 0.3rem 0.5rem

  td
    background-color: white
    border: 1px solid #a7a7a7
    min-width: 2.5rem
    padding: 0.3rem 0.5rem

.board
  background-color: white
  border-collapse: collapse
  text-align: center
  margin-right: 1rem

  &:last-child
    margin: 0rem

  th
    font-size: 1.2rem
    font-weight: bold
    padding: 0.3rem 0.5rem

    &.standard-column
      background-color: #e0e0e0
      border: 1px solid #a7a7a7
      color: black

    &.shadow-column
      background-color: #616161
      border: 1px dashed #a7a7a7
      color: white

  td
    padding: 0.3rem 0.5rem
    border: 1px solid #a7a7a7
    min-width: 2.5rem
    padding: 0.3rem 0.5rem

    &.standard-column
      border: 1px solid #a7a7a7

    &.shadow-column
      border: 1px dashed #a7a7a7

.part
  border-top: 1px solid #a7a7a7

.result
  font-size: 1.2rem
  padding: 0.7rem 0.5rem
  text-align: center

.index-slot
  background-color: #ffe172

.blue-slot
  background-color: #b3dffd

.pink-slot
  background-color: #ffcdd3

.example
  margin-left: 50px
  background-color: #fff8e2 !important

  .function__header
    background-color: #7e5f01

  .function__footer
    background-color: #7e5f01
</style>
