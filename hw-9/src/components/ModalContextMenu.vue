<template>
    <div class="overlay" v-if="menuIsShow" @click="close">
      <div class="wrapper" :style="{top: position.top, left: position.left}">
        <button @click="buttonEditPayment" class="button-context-menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="14px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pencil-alt" class="svg-pencil" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"/></svg>
          Редактировать
        </button>
        <button class="button-context-menu" @click="deletePayment(data.id)">
          <svg xmlns="http://www.w3.org/2000/svg" width="11px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-trash" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"/></svg>
          Удалить
        </button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ModalContextMenu',
  props: {
    data: {
      default: () => ({
        date: '',
        category: '',
        value: '',
        id: ''
      })
    },
    menuIsShow: Boolean,
    position: {
      default: () => ({
        top: 0,
        left: 0
      })
    }
  },
  methods: {
    buttonEditPayment () {
      const bla = {
        ...this.data,
        date: this.formatDateForEdit(this.data.date)
      }
      console.log(bla)
      this.$modal.show({
        title: 'Add Payment Form',
        content: 'addPaymentForm',
        data: {
          ...this.data,
          date: this.formatDateForEdit(this.data.date)
        }
      })
    },
    deletePayment (id) {
      this.$store.dispatch('deletePayment', { id })
    },
    close () {
      this.$paymentMenu.hide()
    },
    formatDateForEdit (date) {
      const parts = date.split(".")
      return `${parts[2]}-${parts[1]}-${parts[0]}`
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  z-index: 0;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.wrapper {
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 16px rgba(0,0,0,0.3);
    width: 140px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;

    .button-context-menu {
      display: block;
      border: none;
      width: 140px;
      height: 40px;
      align-self: center;
      text-align: left;
      cursor: pointer;
      background: none;

      .svg-pencil {
        margin: 0 4px;
      }

      .svg-trash {
        margin: 0 6px;
      }

      &:hover {
        background-color: rgba(0,0,0,0.1);
      }
    }

    // &.content {
    //     position: relative;
    //     z-index: 100;
    // }

}

</style>
