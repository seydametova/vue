<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <calc/>
    {{ myCollection }}
    <div v-for="(item, index) in myCollection" :key="index">
      {{ index }} - {{ item }}
    </div>
  </div>
</template>

<script>
import Calc from './components/Calc.vue'

export default {
  name: 'App',
  components: {
    Calc
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
    b: 1,
    msg: 'Welcome to Your Vue.js App'
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
