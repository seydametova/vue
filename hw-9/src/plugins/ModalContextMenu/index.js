import Vue from "vue"

export default {
  install (vue) {
    if (this.installed) {
      return
    }

    this.installed = true

    Vue.prototype.$paymentMenu = {
      EventBus: new Vue(),

      show (settings) {
        this.EventBus.$emit('onMenuShown', settings)
        console.log('menuShow', settings)
      },

      hide () {
        this.EventBus.$emit('onMenuHide')
        console.log('menuHide')
      }
    }
  }
}
