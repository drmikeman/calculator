<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 md5>
      <v-card>
        <v-container fluid>
          <v-list two-line>
            <template v-for="item in expressions">
              <v-list-tile :key="item.expression">
                <v-list-tile-content>
                  <v-text-field v-model="item.expression" box />
                </v-list-tile-content>
                <v-list-tile-content class="align-end">
                  <v-text-field v-text="calculate(item.expression)" />
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

import { Calculator } from '~/calculator/calculator'

export default {
  data() {
    return {
      expressions:
      [
        { expression: '2*3' },
        { expression: '5+8' }
      ]
    }
  },
  methods: {
    calculate: function (expression) {
      return new Calculator().calculate(expression)
    }
  }
}
</script>
