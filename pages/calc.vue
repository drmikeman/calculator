<template lang="pug">
  div
    h3 {{ value }}
</template>

<script>
// import { create, all } from 'mathjs'

export default {
  data() {
    const program = {
      columns: [
        { name: 'Index', cells: [0, '2+1'] },
        { name: 'Value', cells: [0, 1, '3*6'] }
        // dodanie kolumny: mutate, select z wyrażeniem
        // wybranie kolumny: select, select z nazwą kolumny (również zmiana kolejności formuł)
        // filtrowanie wierszy: filter, where
        // sortowanie: arrange, order by
        // steps: {
        //   substeps: [
        //     type: "add_column", "select_columns" "sort_rows", "filter_rows"
        //   ]
        // }
      ]
    }

    const columns = program.columns.map(c => c.name)

    const iterator = function (program, columns) {
      return {
        next: function () {
          return { value: columns.length, done: true }
        }
      }
    }

    // const math = create(all)
    let count = 0

    while (count < 4) {
      count++
    }

    // const code = math.parse(expr)
    // const result1 = code.evaluate(scope)
    // const result2 = code.evaluate({ a: 3 })

    // iteruj po wierszach tabeli, tak długo jak spełniony jest warunek
    // dla każdej kolumnu z tabeli pobierz formułę, dostarcz kontekst i oblicz wartość
    // uzpuełnij kontekst o obliczoną wartość

    return {
      program,
      // math,
      value: iterator(program, columns).next().value
    }
  }
}
</script>
