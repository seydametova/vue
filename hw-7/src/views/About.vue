<template>
    <div>
      <br/>
      About
      <button @click="openModalAuth">OpenAuth</button>
    </div>
</template>

<script>

export default {
  name: 'About',
  components: {},
  methods: {
    openModalAuth () {
      this.$modal.show({ title: 'Auth', content: 'auth' })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
