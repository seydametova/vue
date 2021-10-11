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
    <modal-window-add-payment-form @close="onModalClose" v-if="modalIsShow" :settings="modalSettings"/>
    <br/>
    <div>
      <button @click="openPayment">add Payment</button>
      <button @click="openAuth">Auth</button>
    </div>
  </div>
</template>

<script>
import ModalWindowAddPaymentForm from './components/ModalWindowAddPaymentForm.vue'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: { ModalWindowAddPaymentForm },
  data: () => ({
    modalIsShow: false,
    modalSettings: {}
  }),
  computed: {
    ...mapGetters([
      'getPaymentsList',
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
      this.$store.dispatch('addPayment', { payment: data })
    },
    selectPage (page) {
      this.$store.commit('setCurrentPage', page)
      this.$store.dispatch('fetchData')
    },
    goToPage (pageName) {
      this.$router.push({
        name: pageName
      })
    },
    onModalClose () {
      this.modalIsShow = false
    },
    openPayment () {
      this.modalIsShow = true
      this.modalSettings = {
        title: 'Add Payment Form',
        content: 'addPaymentForm'
      }
    },
    openAuth () {
      this.modalIsShow = true
      this.modalSettings = {
        title: 'Auth Form',
        content: 'auth'
      }
    }
  },
  mounted () {},
  created () {
    console.log(this.$modal)
    this.$store.commit('setCurrentPage', Number(this.$route.params.page) || 1)
    this.$store.dispatch('fetchData')
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
