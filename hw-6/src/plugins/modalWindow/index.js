import Vue from "vue"

export default {
  install (vue) {
    if (this.installed) {
      return
    }

    this.installed = true

    Vue.prototype.$modal = {
      EventBus: new Vue(),

      show (title, settings) {
        this.EventBus.$emit('onShow', title, ...settings)
        console.log('show', title, settings)
      },

      hide () {
        this.EventBus.$emit('hide')
        console.log('hide')
      }
    }
  }
}
