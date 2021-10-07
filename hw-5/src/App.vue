<template>
  <div id="app" class="font">
    <header>
      <router-link to="/dashboard">dashboard</router-link>
      <router-link to="/about">about</router-link>
      <div @click="goToPage('NotFound')">404</div>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({}),
  computed: {},
  methods: {
    goToPage (pageName) {
      this.$router.push({
        name: pageName
      })
    }
  },
  mounted () {}
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
.font {
  font-family: 'Arial';
  box-sizing: border-box;
  & a {
    padding-left: 6px;
  }
}
.header {
  font-size: 30px;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
