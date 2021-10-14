<template>
    <table class="table">
      <thead>
        <tr class="row">
          <th class="cell">#</th>
          <th class="cell">Date</th>
          <th class="cell">Category</th>
          <th class="cell">Value</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id" class="row">
          <td class="cell">{{ item.id }}</td>
          <td class="cell">{{ item.date }}</td>
          <td class="cell">{{ item.category }}</td>
          <td class="cell">{{ item.value }}</td>
          <td>
            <button @click="openContextMenu($event, item)" class="button-menu">&#9776;</button>
          </td>
        </tr>
      </tbody>
    </table>
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
</style>
