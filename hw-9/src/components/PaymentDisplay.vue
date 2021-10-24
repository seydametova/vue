<template>
<v-container>
  <v-row class="mt-2 font-weight-medium">
    <v-col :cols="1">#</v-col>
    <v-col :cols="4">Date</v-col>
    <v-col :cols="3">Category</v-col>
    <v-col :cols="2">Value</v-col>
    <v-col :cols="2">Actions</v-col>
  </v-row>
  <v-row v-for="item in items" :key="item.id">
    <v-col :cols="1">{{ item.id }}</v-col>
    <v-col :cols="4">{{ item.date }}</v-col>
    <v-col :cols="3">{{ item.category }}</v-col>
    <v-col :cols="2">{{ item.value }}</v-col>
    <v-col :cols="2" class="actions">
      <v-icon
      small
      class="mr-2"
      @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
      small
      @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </v-col>
  </v-row>
</v-container>
</template>

<script>

export default {
  name: 'PaymentDisplay',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  methods: {
    openContextMenu (event, data) {
      const rect = event.target.getBoundingClientRect()
      this.$paymentMenu.show({ data, position: { top: `${rect.top + rect.height}px`, left: `${rect.left - 140 + rect.width}px` } })
    },
    editItem (item) {
      this.$emit('editItem', item)
    },
    deleteItem (item) {
      this.$emit('deleteItem', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  border-collapse: collapse;
  .row {
    .cell {
      padding: 12px 28px;
      text-align: left;
      font-size: 14px;
    }

    &:not(:last-child) {
      border-bottom: 1px solid rgb(224, 224, 224);
    }

    .button-menu {
      border: none;
      background: none;
      cursor: pointer;
    }
  }
}
.actions {
  display: flex;
  justify-content: space-between;
}
</style>
