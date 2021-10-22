<template>
<v-container>
  <v-row>
    <v-col>
      <v-row>
        <v-col>
          <div class="text-h5 text-sm-h3 mb-8">My personal costs</div>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on }">
          <v-btn color="teal" dark v-on="on" @click="buttonAddPayment()">
            ADD NEW COST <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card>
          <add-payment-form :data="paymentData" @addPayment="addPayment" @editPayment="editPayment"/>
        </v-card>
      </v-dialog>

      <payment-display :items="paymentsList" @editItem="openPayment($event)" @deleteItem="removePayment($event)"/>

      <div>
        <main class="main">
          <div class="content-container">
            <PaginationPayment @selectPage="selectPage" :page="currentPage"/>
          </div>
        </main>
      </div>

    </v-col>
    <v-col>
      диаграмма
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import PaymentDisplay from '../components/PaymentDisplay.vue'
import PaginationPayment from '../components/PaginationPayment.vue'
import { mapMutations, mapGetters } from 'vuex'
import AddPaymentForm from '../components/AddPaymentForm.vue'

export default {
  name: 'Dashboard',
  components: {
    PaginationPayment,
    PaymentDisplay,
    AddPaymentForm
  },
  data: () => ({
    dialog: false,
    paymentData: {
      default: () => ({
        date: '',
        category: '',
        value: '',
        id: ''
      })
    }
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
      this.dialog = false
    },
    editPayment (data) {
      this.$store.dispatch('editPayment', { payment: data })
      this.dialog = false
    },
    removePayment (item) {
      this.$store.dispatch('deletePayment', { id: item.id })
    },
    selectPage (page) {
      this.$store.commit('setCurrentPage', page)
      this.$store.dispatch('fetchData')
    },
    openPayment (item) {
      this.paymentData = item
      this.dialog = true
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
      this.dialog = true
      this.paymentData = {
        date: '',
        category: '',
        value: '',
        id: ''
      }
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
.content-container {
  text-align: left;
}
.text-decor {
  font-weight: 300;
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
