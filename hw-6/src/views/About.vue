<template>
    <div>
      About
      <modal-window-add-payment/>
      <button @click="openModalAuth">OpenAuth</button>
    </div>
</template>

<script>
import ModalWindowAddPayment from '../components/ModalWindowAddPayment.vue'

export default {
  name: 'About',
  components: { ModalWindowAddPayment },
  methods: {
    openModalAuth () {
      console.log('open modal')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
