<template>
  <div id="app" class="font">
    <header>
      <div class="header">My personal costs</div>
    </header>
    <main class="main">
      <br/>
      Total Price: {{ getFPV }}
      <add-payment-form @addPayment="addPayment" :category-list="getCategoryList"/>
      <payment-display :items="paymentsList"/>
      <PaginationPayment @selectPage="selectPage" :page="currentPage"/>
    </main>
  </div>
</template>

<script>
import AddPaymentForm from './components/AddPaymentForm.vue'
import PaymentDisplay from './components/PaymentDisplay.vue'
import PaginationPayment from './components/PaginationPayment.vue'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    PaymentDisplay,
    AddPaymentForm,
    PaginationPayment
  },
  data: () => ({}),
  computed: {
    ...mapGetters([
      'getPaymentsList',
      'getCategoryList',
      'getCurrentPage'
    ]),
    getFPV () {
      return this.$store.getters.getPaymentsListFullPrice
    },
    paymentsList () {
      return this.$store.getters.getPaymentsList
    },
    currentPage () {
      return this.$store.getters.getCurrentPage
    }
  },
  methods: {
    ...mapMutations({
      addData: 'setPaymentsListData'
    }),
    addPayment (data) {
      // this.$store.commit('addDataToPaymentsList', data)
      this.$store.dispatch('addPayment', { payment: data })
    },
    selectPage (page) {
      this.$store.dispatch('fetchData', { page })
      this.$store.commit('setCurrentPage', page)
    }
  },
  created () {
    this.$store.dispatch('fetchData', { page: 1 })
    this.$store.dispatch('fetchCategoryList')
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
.font {
  font-family: 'Arial';
  box-sizing: border-box;
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
