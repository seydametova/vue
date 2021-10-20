<template>
    <div class="wrapper" v-if="modalIsShow">
        <div class="header">{{ settings.title }}</div>
        <div class="content">
            <add-payment-form v-if="settings.content == 'addPaymentForm'" :category-list="getCategoryList" :data="settings.data" @addPayment="addPayment" @editPayment="editPayment"/>
            <auth v-if="settings.content == 'auth'" />
            <br/>
            <div class="footer">
                <button @click="onCloseClick">Close</button>
            </div>
        </div>
    </div>
</template>

<script>
import AddPaymentForm from './AddPaymentForm.vue'
import Auth from './Auth.vue'
import { mapGetters } from 'vuex'

export default ({
  name: 'ModalWindowAddPayment',
  components: { Auth, AddPaymentForm },
  props: {
    categoryList: {
      type: Array,
      default: () => []
    },
    settings: Object,
    modalIsShow: Boolean
  },
  computed: {
    ...mapGetters([
      'getCategoryList'
    ])
  },
  methods: {
    onCloseClick () {
      this.$modal.hide()
      this.data = undefined
    },
    addPayment (data) {
      this.$store.dispatch('addPayment', { payment: data })
    },
    editPayment (data) {
      this.$store.dispatch('editPayment', { payment: data })
    },
    getCurrentDate () {
      const date = new Date()
      const d = date.getDate()
      const m = date.getMonth() + 1
      const y = date.getFullYear()
      return `${y}-${m < 10 ? '0' + m : m}-${d < 10 ? '0' + d : d}`
    }
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    z-index: 0;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(68, 61, 61, 0.5);

    &.content {
        position: relative;
        z-index: 100;
    }

}

</style>
