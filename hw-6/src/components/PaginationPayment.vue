<template>
    <div class="pagination">
        <a @click="selectPage(page - 1)" v-show="page !== 1" href="#">&#60;</a>
        <a @click="selectPage(1)" href="#">1</a>
        <a @click="selectPage(2)" href="#">2</a>
        <a @click="selectPage(3)" href="#">3</a>
        <a @click="selectPage(4)" href="#">4</a>
        <a @click="selectPage(page + 1)" v-show="page !== 4" href="#">&#62;</a>
    </div>
</template>

<script>
export default ({
  name: 'PaginationPayment',
  props: {
    page: Number
  },
  methods: {
    selectPage (page) {
      this.$emit('selectPage', page)
    }
  }
})
</script>

<style lang="scss" scoped>
    .pagination{
      padding: 10px 144px;
      width: 150px;
      transition: background-color .3s;
      border: 1px solid rgb(224, 224, 224);
      font-size: 14px;
      text-align: center;
    }
    a {
      text-decoration: none;
      color: black;
      padding: 8px 8px;
    }
    a:hover:not(.active) {
      color: rgb(29, 139, 139);
    }

</style>
