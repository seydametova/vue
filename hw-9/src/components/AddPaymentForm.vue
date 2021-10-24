<template>
<v-card class="text-left pa-8">
  <v-text-field type="date" v-model="data.date" id="add-payment-form-date"/>
  <v-select v-model="data.category" label="Category" :items="categoryList" id="add-payment-form-category"></v-select>
  <v-text-field type="number" v-model="data.value" label="Value" id="add-payment-form-value"/>
  <v-btn color="teal" dark @click="onSaveClick" class="button-add" id="add-payment-form-button">ADD <v-icon>mdi-plus</v-icon></v-btn>
</v-card>
</template>

<script>
export default {
  name: 'AddPaymentForm',
  props: {
    data: {
      default: () => ({
        date: '',
        category: '',
        value: '',
        id: ''
      })
    }
  },
  computed: {
    categoryList () {
      return this.$store.getters.getCategoryList
    },
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
        value: Number(this.data.value),
        id: this.data.id
      }
      if (data.id) {
        this.$emit('editPayment', data)
      } else {
        this.$emit('addPayment', data)
      }
    },
    formatDate (date) {
      const d = date.getDate()
      const m = date.getMonth() + 1
      const y = date.getFullYear()
      return `${d > 9 ? d : "0" + d}.${m > 9 ? m : "0" + m}.${y}`
    }
  }
}
</script>

<style lang="scss" scoped>
.form-container {
  display: flex;
  margin: 24px 0;
  justify-content: center;

  .button-add {
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
