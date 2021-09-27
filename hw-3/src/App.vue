<template>
  <div id="app">
    <counter/>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {
    Counter
  },
  data: () => ({
    myCollection: [1, 2, 3, 4, 5, 6, 7],
    array: [
      { text: 'sdasd', show: true },
      { text: 'sdasd', show: true },
      { text: 'sdasd', show: true },
      { text: 'sdasd', show: true }
    ],
    show: true,
    c: 0,
    a: 1,
    b: 1
  }),
  methods: {
    doThat () {
      this.c = 0
    },
    blurMethod () {
      console.log('blur')
    },
    focusMethod () {
      console.log('focus')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
