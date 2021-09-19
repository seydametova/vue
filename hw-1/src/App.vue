<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <calc/>
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
    message: 'Привет, VUE',
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
