<template lang="pug">
  v-layout.row
    v-card.elevation-5
      contenteditable.function__header(v-model="name" tag="div" :noNL="true")
      v-layout.part.justify-center.row.pa-2
        .argument
          .argument__header {{ params[0].name }}
          .argument__value {{ params[0].value }}
        .argument
          .argument__header {{ params[1].name }}
          v-layout.row
            .argument__value {{ params[1].value[0] }}
            .argument__value {{ params[1].value[1] }}
            .argument__value {{ params[1].value[2] }}
      v-layout.part.justify-center.row.pa-2
        .column
          .column_seq__header {{ columns[0].name }}
          .column_seq__value(v-for="cell in columns[0].cells", :class="cell.color") {{ cell.value }}
        .column
          .column__header {{ columns[1].name }}
          .column__value(v-for="cell in columns[1].cells", :class="cell.color") {{ cell.value }}
        .column
          .column__header {{ columns[2].name }}
          .column__value(v-for="cell in columns[2].cells", :class="cell.color") {{ cell.value }}
      .function__header result
      v-layout.part.justify-center.row.pa-2.result {{ result }}
</template>

<script>

export default {
  data() {
    return {
      name: 'Polynomial',
      params: [
        { name: 'x', value: 1 },
        { name: 'a', value: [2, 5, 6] }
      ],
      columns: [
        {
          name: 'a',
          cells: [
            { value: 2, color: 'index-slot' },
            { value: 5, color: 'index-slot' },
            { value: 6, color: 'index-slot' }
          ]
        },
        {
          name: 'Power',
          cells: [
            { value: 1 },
            { value: 1, color: 'blue-slot' },
            { value: 1, color: 'blue-slot' }
          ]
        },
        {
          name: 'Element',
          cells: [
            { value: 2 },
            { value: 5, color: 'pink-slot' },
            { value: 6, color: 'pink-slot' }
          ]
        }
      ],
      result: 13
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
</style>
