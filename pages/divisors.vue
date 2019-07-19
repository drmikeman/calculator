<template lang="pug">
  v-layout.row
    v-card.elevation-5
      contenteditable.function__header(v-model="name" tag="div" :noNL="true")
      v-layout.part.justify-center.row.pa-2
        .argument
          .argument__header {{ params[0].name }}
          .argument__value {{ params[0].value }}
      v-layout.part.justify-center.row.pa-2
        .column(v-for="column in columns")
          .column__header {{ column.name }}
          .column__value(v-for="cell in column.cells", :class="cell.color") {{ cell.value }}
      v-layout.subpart.justify-center.align-center.row.pa-2
        span Mark
        .legend_variable.index-slot i
        .legend_mark.index-hl-slot &zwj;
        span &nbsp; if &nbsp;
        .legend_variable.blue-slot Rem
        .legend_mark.blue-hl-slot &zwj;
        span = 0
      .function__header result
      v-layout.part.justify-center.row.pa-2.result {{ result }}
</template>

<script>

export default {
  data() {
    return {
      name: 'Divisors',
      params: [
        { name: 'n', value: 4 }
      ],
      columns: [
        {
          name: 'i',
          cells: [
            { value: 1, color: 'index-hl-slot' },
            { value: 2, color: 'index-hl-slot' },
            { value: 3, color: 'index-slot' }
          ]
        },
        {
          name: 'Rem',
          cells: [
            { value: 0, color: 'blue-hl-slot' },
            { value: 0, color: 'blue-hl-slot' },
            { value: 1, color: 'blue-slot' }
          ]
        }
      ],
      result: 3
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
  border-top: 1px solid #a7a7a7
  border-left: 1px solid #a7a7a7
  border-right: 1px solid #a7a7a7

.subpart
  @extend .part
  border-top: 1px dashed #a7a7a7

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

.index-hl-slot
  background-color: #ff8f00
  color: white

.blue-slot
  background-color: #b3dffd

.blue-hl-slot
  background-color: #4f81bd
  color: white

.pink-slot
  background-color: #ffcdd3

.result
  font-size: 1.2rem

.legend_variable
  margin-left: 3px
  margin-top: 3px
  margin-bottom: 3px
  color: black
  padding: 0.1rem 0.4rem
  border: 1px solid #a7a7a7

.legend_mark
  margin-right: 3px
  margin-top: 3px
  margin-bottom: 3px
  color: black
  padding: 0.1rem 0.4rem
  border: 1px solid #a7a7a7

</style>
