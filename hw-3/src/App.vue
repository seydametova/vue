<template>
  <div id="app" class="font">
    <header>
      <div class="header">My personal costs</div>
    </header>
    <main class="main">
      <add-payment-form @addPayment="addPayment"/>
      <payment-display :items="paymentsList"/>
    </main>
  </div>
</template>

<script>
import AddPaymentForm from './components/AddPaymentForm.vue'
import PaymentDisplay from './components/PaymentDisplay.vue'

export default {
  name: 'App',
  components: {
    PaymentDisplay,
    AddPaymentForm
  },
  data: () => ({
    paymentsList: []
  }),
  methods: {
    fetchData () {
      return [
        {
          date: '28.03.2020',
          category: 'Food',
          value: 169
        },
        {
          date: '24.03.2020',
          category: 'Transport',
          value: 360
        },
        {
          date: '24.03.2020',
          category: 'Food',
          value: 532
        }
      ]
    },
    addPayment (data) {
      this.paymentsList = [...this.paymentsList, data]
    }
  },
  created () {
    this.paymentsList = this.fetchData()
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
