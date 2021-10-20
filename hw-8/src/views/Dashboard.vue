<template>
  <div>
    <main class="main">
      <!-- Total Price: {{ getFPV }} -->
      <div class="container">
        <h1 class="text-decor">My personal costs</h1>
        <button @click="buttonAddPayment" class="button-add-new-coast">ADD NEW COST &#43;</button>
        <payment-display :items="paymentsList"/>
        <PaginationPayment @selectPage="selectPage" :page="currentPage"/>
      </div>
      <!-- <button @click="buttonAddPayment" >add</button> -->
      <!-- <modal-window-add-payment-form @close="onModalClose" v-if="modalIsShow" :settings="modalSettings"/>
      <br/>
      <div>
        <button @click="openPayment">add Payment</button>
        <button @click="openAuth">Auth</button>
      </div> -->
    </main>
  </div>
</template>

<script>
import PaymentDisplay from '../components/PaymentDisplay.vue'
import PaginationPayment from '../components/PaginationPayment.vue'
import { mapMutations, mapGetters } from 'vuex'
// import ModalWindowAddPaymentForm from '../components/ModalWindowAddPaymentForm.vue'

export default {
  name: 'Dashboard',
  components: {
    PaginationPayment,
    PaymentDisplay
    // ModalWindowAddPaymentForm
  },
  data: () => ({
    // modalIsShow: false,
    // modalSettings: {}
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
    openPayment () {
      this.modalIsShow = true
      this.modalSettings = {
        title: 'Add Payment Form',
        content: 'AddPaymentForm'
      }
    },
    openAuth () {
      this.modalIsShow = true
      this.modalSettings = {
        title: 'Auth Form',
        content: 'auth'
      }
    },
    onModalClose () {
      this.modalIsShow = false
    },
    buttonAddPayment () {
      this.$modal.show({ title: 'Add Payment Form', content: 'addPaymentForm' })
    }
  },
  created () {
    this.$store.commit('setCurrentPage', Number(this.$route.params.page) || 1)
    this.$store.dispatch('fetchData')
    this.$store.dispatch('fetchCategoryList')
  }
}
</script>

<style lang="scss" scoped>
.container {
  text-align: left;
}
.text-decor {
  font-weight: 100;
  font-size: 40px;
  margin: 16px 0;
}
.button-add-new-coast {
  display: block;
  margin: 16px 0;
  $btn-background: rgb(29, 139, 139);

  border: none;
  padding: 8px 16px;
  color: white;
  background: $btn-background;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
      background: lighten($btn-background, 10%);
  }
}

</style>
