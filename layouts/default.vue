<template>
  <v-app>
    <v-toolbar fixed app>
      <v-toolbar-title v-text="title" />
    </v-toolbar>

    <v-navigation-drawer app permanent width="120">
      <v-list>
        <v-list-tile v-for="program in programs" :key="program.title" :to="program.link" nuxt>
          <v-list-tile-content>
            <v-list-tile-title>{{ program.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider inset />
      <v-subheader inset>
        Other
      </v-subheader>
      <v-list>
        <v-list-tile v-for="other in others" :key="other.title" :to="other.link" nuxt>
          <v-list-tile-content>
            <v-list-tile-title>{{ other.title }}</v-list-tile-title>
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
      programs: [
        { title: 'Power', link: '/power' },
        { title: 'Fibonacci', link: '/fibo' },
        { title: 'Polynomial', link: '/polynomial' },
        { title: 'Divisors', link: '/divisors' },
        { title: 'Holding', link: '/holding' }
      ],
      others: [
        { title: 'LaTeX', link: '/latex' },
        { title: 'Calculator', link: '/calc' },
        { title: 'Sandbox', link: '/sandbox' }
      ]
    }
  }
}
</script>
