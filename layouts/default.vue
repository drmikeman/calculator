<template>
  <v-app>
    <v-toolbar fixed app>
      <v-toolbar-title v-text="title" />
    </v-toolbar>

    <v-navigation-drawer app permanent width="120">
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.link" nuxt>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Calculator for Board Programming',
      items: [
        { title: 'Power', link: '/power' },
        { title: 'Fibonacci', link: '/fibo' },
        { title: 'Polynomial', link: '/polynomial' },
        { title: 'Divisors', link: '/divisors' },
        { title: 'Holding', link: '/holding' }
      ]
    }
  }
}
</script>
