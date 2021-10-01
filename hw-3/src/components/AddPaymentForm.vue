<template>
    <div class="form-container">
        <div>
            <button v-on:click="show=!show" class="button">ADD NEW COST &#43;</button>
        </div>
        <div v-show="show" class="form">
            <input type="date" placeholder="Date" v-model="date" class="input-placeholder">
            <input placeholder="Category" v-model="category" class="input-placeholder">
            <input type="number" placeholder="Value" v-model="value" class="input-placeholder">
            <button @click="onSaveClick" class="button">ADD &#43;</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AddPaymentForm',
  data () {
    return {
      date: '',
      category: '',
      value: '',
      show: false
    }
  },
  computed: {
    getCurrentDate () {
      const today = new Date()
      return this.formatDate(today)
    }
  },
  methods: {
    onSaveClick () {
      if (!this.category || !this.value) {
        alert('Заполните поля.')
        return
      }
      const data = {
        date: this.date ? this.formatDate(new Date(this.date)) : this.getCurrentDate,
        category: this.category,
        value: this.value
      }
      this.$emit('addPayment', data)
    },
    formatDate (date) {
      const d = date.getDate()
      const m = date.getMonth() + 1
      const y = date.getFullYear()
      return `${d}.${m}.${y}`
    }
  }
}
</script>

<style lang="scss" scoped>
    .form-container {
        display: flex;
        margin: 24px 0;

        .button {
            $btn-background: rgb(29, 139, 139);

            border: none;
            padding: 8px 16px;
            color: white;
            background: $btn-background;
            border-radius: 4px;
            cursor: pointer;

            &:hover {
                background: lighten($btn-background, 10%);
            }
        }

        .form {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 24px;

            .input-placeholder {
                width: 100%;
                margin-bottom: 16px;
                font-size: 20px;
                line-height: 24px;
            }
        }

    }
</style>
