import Vue from "vue"

export default {
  install (vue) {
    if (this.installed) {
      return
    }

    this.installed = true

    Vue.prototype.$modal = {
      EventBus: new Vue(),

      show (settings) {
        this.EventBus.$emit('onShown', settings)
        console.log('show', settings)
      },

      hide () {
        this.EventBus.$emit('onHide')
        console.log('hide')
      }
    }
  }
}
