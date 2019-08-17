<template lang="pug">
  v-layout.row
    v-card.elevation-5
      contenteditable.function__header(v-model="name" tag="div" :noNL="true")
      v-layout.part.justify-center.row.pa-2
        .argument(v-for="param in params")
          table
            caption {{ param.name }}
            thead
              tr
                th(v-for="key in param.columns") {{ key }}
            tbody
              tr(v-for="entry in param.data")
                td(v-for="key in param.columns") {{entry[key]}}
      v-layout.part.justify-center.row.pa-2
        .column(v-for="key in params[0].columns")
          .column_seq__header {{ key }}
          .column_seq__value.index-slot(v-for="entry in params[0].data") {{ entry[key] }}
        .column(v-for="column in steps[0].columns")
          .column__header {{ column.name }}
          .column__value(v-for="cell in column.cells", :class="cell.color") {{ cell.value }}
      v-layout.part.justify-center.row.pa-2
        .column(v-for="key in params[0].columns")
          .column_seq__header {{ key }}
          .column_seq__value.index-slot(v-for="entry in params[0].data") {{ entry[key] }}
        .column(v-for="column in steps[1].columns")
          .column__header {{ column.name }}
          .column__value(v-for="cell in column.cells", :class="cell.color") {{ cell.value }}
      .function__header result
      v-layout.part.justify-center.row.pa-2.result
        .column
          .column__header {{ 'J' }}
          .column__value {{ 1 }}
        .column
          .column__header {{ 'Wsk' }}
          .column__value {{ 4 }}
</template>

<script>

export default {
  data() {
    return {
      name: 'Holding',
      params: [
        {
          name: 'Factors',
          columns: [ 'A', 'B', 'C', 'P' ],
          data: [
            { A: 800, B: 500, C: 200, P: 300 },
            { A: 800, B: 500, C: 200, P: 600 },
            { A: 800, B: 500, C: 300, P: 600 }
          ]
        }
      ],
      steps: [
        {
          columns: [
            {
              name: 'J',
              cells: [
                { value: 0 },
                { value: 1, color: 'blue-slot' },
                { value: 2, color: 'blue-slot' }
              ]
            },
            {
              name: 'Wsk',
              cells: [
                { value: 8, color: 'pink-slot ' },
                { value: 4, color: 'pink-slot' },
                { value: 4.5, color: 'pink-slot' }
              ]
            }
          ]
        },
        {
          columns: [
            {
              name: 'J',
              cells: [
                { value: 0 },
                { value: 2, color: 'blue-slot' },
                { value: 1, color: 'blue-slot' }
              ]
            },
            {
              name: 'Wsk',
              cells: [
                { value: 8, color: 'pink-slot ' },
                { value: 4.5, color: 'pink-slot' },
                { value: 4, color: 'pink-slot' }
              ]
            }
          ]
        }
      ],
      result: 1
    }
  }
}
</script>

<style lang="stylus" scoped>
.function__header
  background-color: #558b2f
  color: white
  font-size: 1.5rem
  font-weight: 600
  padding: 0.25rem 0.5rem
  border: 1px solid black
  text-align: center

.part
  border: 1px solid #a7a7a7

.argument
  font-size: 1.2rem
  text-align: center
  margin: 5px
  min-width: 2.5rem

  &__header
    background-color: #616161
    color: white
    padding: 0.1rem 0.5rem
    border: 1px solid black
    font-weight: bold

  &__value
    background-color: white
    padding: 0.25rem 0.5rem
    border: 1px solid #a7a7a7
    text-align: center

.column
  font-size: 1.2rem
  text-align: center
  margin: 5px -1px
  min-width: 2.5rem

  &__header
    background-color: #e0e0e0
    color: black
    padding: 0.1rem 0.5rem
    border: 1px solid #a7a7a7
    font-weight: bold

  &__value
    margin-top: -1px
    background-color: white
    padding: 0.25rem 0.5rem
    border: 1px solid #a7a7a7
    text-align: center

  &_seq__header
    background-color: #616161
    color: white
    padding: 0.1rem 0.5rem
    border: 1px dashed #a7a7a7
    font-weight: bold

  &_seq__value
    margin-top: -1px
    background-color: white
    padding: 0.25rem 0.5rem
    border: 1px dashed #a7a7a7
    text-align: center

.index-slot
  background-color: #ffe172

.blue-slot
  background-color: #b3dffd

.pink-slot
  background-color: #ffcdd3

.result
  font-size: 1.2rem

table
  border-collapse: collapse
  caption-side: top

table, th
  border: 1px solid black

caption
  border-top: 1px solid black
  border-left: 1px solid black
  border-right: 1px solid black

th, caption
  background-color: #616161
  color: white
  padding: 0.1rem 0.5rem
  font-weight: bold

td
  background-color: white
  padding: 0.3rem 0.5rem
  border: 1px solid #a7a7a7
  text-align: center
</style>
