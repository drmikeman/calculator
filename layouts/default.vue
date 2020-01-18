<template lang="pug">
  v-app
    v-toolbar(fixed app)
      v-toolbar-title(v-text="title")

    v-navigation-drawer(app permanent width="120")
      v-subheader Functions
      v-list
        v-list-tile(v-for="program in programs" :key="program.title" :to="program.link" nuxt)
          v-list-tile-content
            v-list-tile-title {{ program.title }}
      v-divider
      v-subheader Other
      v-list
        v-list-tile(v-for="other in others" :key="other.title" :to="other.link" nuxt)
          v-list-tile-content
            v-list-tile-title {{ other.title }}

    v-content
      v-container
        nuxt
</template>

<script>
export default {
  data() {
    return {
      title: 'Sandbox for Board Programming',
      programs: [
        { title: 'Power', link: '/power' },
        { title: 'Fibonacci', link: '/fibo' },
        { title: 'Polynomial', link: '/polynomial' },
        { title: 'Divisors', link: '/divisors' },
        { title: 'Holding', link: '/holding' }
      ],
      others: [
        { title: 'LaTeX', link: '/latex' },
        { title: 'Sandbox', link: '/sandbox' }
      ]
    }
  }
}
</script>
