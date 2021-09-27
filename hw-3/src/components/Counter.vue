<template>
    <button @click="onClick">Clicked {{ counter }} times!</button>
</template>

<script>
export default {
  name: 'Counter',
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    onClick () {
      this.counter++
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
    this.counter = 1
  }
}
</script>
