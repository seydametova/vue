<template>
<div class="view">
    <add-payment-form @addPayment="addPayment" :category-list="getCategoryList" :data="payment"/>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import AddPaymentForm from '../components/AddPaymentForm'

export default {
  name: 'AddPaymentView',
  components: {
    AddPaymentForm
  },
  data: function () {
    return {
      payment: {
        date: this.getCurrentDate(),
        category: '',
        value: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'getCategoryList'
    ])
  },
  methods: {
    addPayment (data) {
      this.$store.dispatch('addPayment', { payment: data })
    },
    getCurrentDate () {
      const date = new Date()
      const d = date.getDate()
      const m = date.getMonth() + 1
      const y = date.getFullYear()
      return `${y}-${m < 10 ? '0' + m : m}-${d < 10 ? '0' + d : d}`
    }
  },
  created () {
    this.payment = {
      ...this.payment,
      category: this.$route.params.category,
      value: Number(this.$route.query.value || 0)
    }
    this.$store.dispatch('fetchCategoryList')
  }
}
</script>

<style lang="scss" scoped>
.view {
    display: flex;
    justify-content: center;
}
</style>
