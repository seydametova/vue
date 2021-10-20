<template>
  <div id="app" class="font">
    <header>
      <router-link to="/dashboard">dashboard</router-link>
      <router-link to="/about">about</router-link>
      <!-- <router-link to="/404">notfound</router-link> -->
      <!-- <div @click="goToPage('NotFound')">404</div> -->
    </header>
    <main>
      <router-view/>
    </main>
    <transition name="fade">
      <modal-window-add-payment :settings="modalSettings.modalSettings" :modalIsShow="modalSettings.modalIsShow"/>
    </transition>
    <transition name="fade">
      <modal-context-menu :data="menuSettings.menuData" :menuIsShow="menuSettings.menuIsShow" :position="menuSettings.position"/>
    </transition>
    <br/>
  </div>
</template>

<script>
// import ModalWindowAddPayment from './components/ModalWindowAddPayment.vue'
import { mapMutations, mapGetters } from 'vuex'
// import ModalContextMenuVue from './components/ModalContextMenu.vue'

export default {
  name: 'App',
  components: {
    ModalWindowAddPayment: () => import('./components/ModalWindowAddPayment.vue'),
    ModalContextMenu: () => import('./components/ModalContextMenu.vue')
  },
  data: () => ({
    modalSettings: {
      modalIsShow: false,
      modalSettings: {}
    },
    menuSettings: {
      menuIsShow: false,
      menuData: {},
      position: {
        top: 0,
        left: 0
      }
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
    // openPayment () {
    //   this.modalIsShow = true
    //   this.modalSettings = {
    //     title: 'Add Payment Form',
    //     content: 'addPaymentForm'
    //   }
    // },
    // openAuth () {
    //   this.modalIsShow = true
    //   this.modalSettings = {
    //     title: 'Auth Form',
    //     content: 'auth'
    //   }
    // },
    onShown (settings) {
      this.modalSettings.modalSettings = settings
      this.modalSettings.modalIsShow = true
    },
    onHide () {
      this.modalSettings.modalIsShow = false
      this.modalSettings.modalSettings = {}
    },
    onShownPaymentMenu (settings) {
      this.menuSettings.menuData = settings.data
      this.menuSettings.menuIsShow = true
      this.menuSettings.position = settings.position
    },
    onHidePaymentMenu () {
      this.menuSettings.menuIsShow = false
      this.menuSettings.menuData = {}
      this.menuSettings.position = {
        top: 0,
        left: 0
      }
    }
  },
  mounted () {
    this.$modal.EventBus.$on('onShown', this.onShown)
    this.$modal.EventBus.$on('onHide', this.onHide)

    this.$paymentMenu.EventBus.$on('onMenuShown', this.onShownPaymentMenu)
    this.$paymentMenu.EventBus.$on('onMenuHide', this.onHidePaymentMenu)
  },
  created () {
    console.log(this.$modal)
    this.$store.commit('setCurrentPage', Number(this.$route.params.page) || 1)
    this.$store.dispatch('fetchData')
    this.$store.dispatch('fetchCategoryList')

    console.log(this.$paymentMenu)
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
.h1 {
  font-weight: normal;
}
.header {
  font-size: 40px;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .10s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
