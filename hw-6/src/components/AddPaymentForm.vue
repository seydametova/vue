<template>
    <div class="form-container">
        <div class="form">
            <input type="date" placeholder="Date" v-model="data.date" class="input-placeholder">
            <select v-model="data.category" class="input-placeholder">
              <option v-for="option in categoryList" :key="option">
                {{ option }}
              </option>
            </select>
            <input type="number" placeholder="Value" v-model="data.value" class="input-placeholder">
            <button @click="onSaveClick" class="button">ADD &#43;</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AddPaymentForm',
  props: {
    categoryList: {
      type: Array,
      default: () => []
    },
    data: {
      default: () => ({
        date: '',
        category: '',
        value: ''
      })
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
      if (!this.data.category || !this.data.value) {
        alert('Заполните поля.')
        return
      }
      const data = {
        date: this.data.date ? this.formatDate(new Date(this.data.date)) : this.getCurrentDate,
        category: this.data.category,
        value: Number(this.data.value)
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
        justify-content: center;

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

            .input-placeholder {
                width: 100%;
                margin-bottom: 16px;
                font-size: 20px;
                line-height: 24px;
                box-sizing: border-box;
            }
        }

    }
</style>
