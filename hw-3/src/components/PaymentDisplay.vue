<template>
    <table class="table">
      <thead>
        <tr class="row">
          <th class="cell">#</th>
          <th class="cell">Date</th>
          <th class="cell">Category</th>
          <th class="cell">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in items" :key="idx" class="row">
          <td class="cell">{{ idx + 1 }}</td>
          <td class="cell">{{ item.date }}</td>
          <td class="cell">{{ item.category }}</td>
          <td class="cell">{{ item.value }}</td>
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
  }
}
</script>

<style lang="scss" scoped>
.table {
  border-collapse: collapse;
  .row {
    .cell {
      padding: 8px 16px;
      text-align: left;
    }

    &:not(:last-child) {
      border-bottom: 1px solid rgb(224, 224, 224);
    }
  }
}
</style>
