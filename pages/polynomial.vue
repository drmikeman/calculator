<template lang="pug">
  v-layout.row
    v-card.elevation-5.example
      .function__header {{ name }}
      v-layout.justify-center.row.pa-3
        .argument
          .argument__header {{ params[0].name }}
          v-layout.column
            .argument__value &nbsp;
        .argument.ml-3
          .argument__header {{ params[1].name }}
          v-layout.row
            .argument__value &nbsp;
            .argument__value &nbsp;
            .argument__value &nbsp;
      v-layout.part.justify-center.row.pa-3(@click="showDialog()")
        .column
          .column_seq__header {{ columns[0].name }}
          .column_seq__value(v-for="cell in columns[0].cells", :class="cell.color") &nbsp;
        .column
          .column__header {{ columns[1].name }}
          .column__value =&thinsp;1
          div(style="position: relative")
            .column__value(style="border-bottom: 1px solid transparent") pierwsza kom
            .column__value druga kom
            div(style="position: absolute; background-color: blue; top: 0px; left: 0px; opacity: 0.9")
              div =&thinsp;$*xxxxxxxxxxx
              div =&thinsp;$*xxxxxxxxxxx
        .column
          .column__header {{ columns[2].name }}
          .column__value(v-for="cell in columns[2].cells", :class="cell.color") {{ cell.value }}
      .function__header(style="font-size: 1.2rem") result
      v-layout.part.justify-center.row.pa-2.result {{ result }}
      v-dialog(v-model="dialog")
        v-flex.justify-center.row
          v-card.elevation-5
            v-layout.justify-center.row.pa-3
              .column
                .column_seq__header {{ columns[0].name }}
                .column_seq__value(v-for="cell in columns[0].cells", :class="cell.color") {{ cell.value }}
              .column
                .column__header {{ columns[1].name }}
                .column__value(v-for="cell in columns[1].cells", :class="cell.color") {{ cell.value }}
              .column
                .column__header {{ columns[2].name }}
                .column__value(v-for="cell in columns[2].cells", :class="cell.color") {{ cell.value }}
    v-card.elevation-5.example.example-background
      .function__header.example-header Example 1
      v-layout.justify-center.row.pa-3
        .argument
          .argument__header {{ params[0].name }}
          v-layout.column
            .argument__value {{ params[0].value }}
        .argument.ml-3
          .argument__header {{ params[1].name }}
          v-layout.row
            .argument__value {{ params[1].value[0] }}
            .argument__value {{ params[1].value[1] }}
            .argument__value {{ params[1].value[2] }}
      v-layout.part.justify-center.row.pa-3(@click="showDialog()")
        .column
          .column_seq__header {{ columns[0].name }}
          .column_seq__value(v-for="cell in columns[0].cells", :class="cell.color") {{ cell.value }}
        .column
          .column__header {{ columns[1].name }}
          .column__value(v-for="cell in columns[1].cells", :class="cell.color") {{ cell.value }}
        .column
          .column__header {{ columns[2].name }}
          .column__value(v-for="cell in columns[2].cells", :class="cell.color") {{ cell.value }}
      .function__header.example-header(style="font-size: 1.2rem") result
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
      result: 13,
      dialog: false
    }
  },
  methods: {
    showDialog: function () {
      this.dialog = true
    }
  }
}
</script>

<style lang="stylus" scoped>
.example:first-child
  margin-right: 50px

.border
  border: 1px solid black

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

.argument
  font-size: 1.2rem
  text-align: center
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

  &__value:not(:first-child)
    border-left: none

.column
  font-size: 1.2rem
  text-align: center
  min-width: 2.5rem

  &:not(:first-child) &__header
    border-left: none

  &__header
    background-color: #e0e0e0
    color: black
    padding: 0.3rem 0.5rem
    border: 1px solid #a7a7a7
    font-weight: bold

  &__value
    margin-top: -1px
    background-color: white
    padding: 0.25rem 0.5rem
    border: 1px solid #a7a7a7
    text-align: center

  &__value:not(:first-child)
    border-left: none

  &_seq__header
    background-color: #616161
    color: white
    padding: 0.3rem 0.5rem
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

.example-header
  background-color: #7e5f01

.example-background
  background-color: #fff8e2

.result
  font-size: 1.2rem
</style>
