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
                :height="column.cells[i].span*30 + 'px'"
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
  program: {
    name: 'Power',
    params: [
      { name: 'a' },
      { name: 'n' }
    ],
    steps: [
      {
        actions: [
          { type: 'add_index', name: 'i', indexType: 'range', from: 0, step: 1, to: 'n' },
          { type: 'add_column', name: 'Value', expressions: [1, '$*a'] }
        ]
      }
    ],
    result: '$Value'
  },
  data() {
    return {
      name: 'Power',
      params: [
        { name: 'a', type: 'value', value: '2' },
        { name: 'n', type: 'value', value: '5' }
      ],
      columns: [
        {
          name: 'i',
          class: 'standard-column',
          cells: [
            { value: 0, expression: '0' },
            { value: 1, expression: '$+1', span: 4, color: 'index-slot' },
            { value: 2, color: 'index-slot', skip: true },
            { value: 3, color: 'index-slot', skip: true },
            { value: 4, color: 'index-slot', skip: true },
            { value: 5, color: 'index-slot', expression: 'n' }
          ]
        },
        {
          name: 'Value',
          class: 'standard-column',
          cells: [
            { value: 1, expression: '1' },
            { value: 2, expression: '$*a', span: 5, color: 'blue-slot' },
            { value: 4, skip: true, color: 'blue-slot' },
            { value: 8, skip: true, color: 'blue-slot' },
            { value: 16, skip: true, color: 'blue-slot' },
            { value: 32, skip: true, color: 'blue-slot' }
          ]
        }
      ],
      result: {
        expression: 'Last(Value)',
        value: 32
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
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
