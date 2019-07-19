<template lang="pug">
  v-layout.row
    v-card.elevation-5
      .function__header {{ name }}
      v-layout.part.justify-center.row.pa-2
        .argument(v-for="param in params")
          .argument__header {{ param.name }}
          .argument__value {{ param.value }}
      v-layout.part.justify-center.row.pa-2
        .column(v-for="column in columns")
          .column__header {{ column.name }}
          .column__value(v-for="cell in column.cells", :class="cell.color") {{ cell.value }}
      .function__header result
      v-layout.part.justify-center.row.pa-2.result {{ result }}
</template>

<script>
export default {
  data() {
    return {
      name: 'Fibonacci',
      params: [
        { name: 'n', value: '5' }
      ],
      columns: [
        {
          name: 'i',
          cells: [
            { value: 0 },
            { value: 1, color: 'index-slot' },
            { value: 2, color: 'index-slot' },
            { value: 3, color: 'index-slot' },
            { value: 4, color: 'index-slot' },
            { value: 5, color: 'index-slot' }
          ]
        },
        {
          name: 'Value',
          cells: [
            { value: 0 },
            { value: 1 },
            { value: 1, color: 'blue-slot' },
            { value: 2, color: 'blue-slot' },
            { value: 3, color: 'blue-slot' },
            { value: 5, color: 'blue-slot' }
          ]
        }
      ],
      result: 5
    }
  }
}
</script>

<style lang="stylus">
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
  margin: 5px
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

.index-slot
  background-color: #ffe172

.blue-slot
  background-color: #b3dffd

.result
  font-size: 1.2rem
</style>
