<template>
    <div class="text-center pagination">
      <v-pagination
        @next="selectPage(page + 1)"
        @previous="selectPage(page - 1)"
        @input="selectPage"
        :value="page"
        color="teal"
        :length="getTotalPages" class="paginator"
      ></v-pagination>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default ({
  name: 'PaginationPayment',
  props: {
    page: Number
  },
  computed: {
    ...mapGetters([
      'getTotalPages'
    ])
  },
  methods: {
    selectPage (page) {
      this.$emit('selectPage', page)
    }
  }
})
</script>

<style lang="scss">
.paginator {
  .v-pagination {
    &__item, &__navigation {
      box-shadow: none;

      &--active.teal {
        background: none !important;
        color: #009688 !important;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.pagination{
  padding: 10px 144px;
  // width: 150px;
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
