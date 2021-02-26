<template>
  <div>
    <md-pagination
      mdPageSize="25"
      :mdPage="pagination.page"
      :mdTotalPage="pagination.totalPages"
      @update:mdPageSize="_handleChangePageSize"
      @update:mdPage="_handleChangePage"
    />
  </div>
</template>

<script>
export default {
  name: "Example",
  data: () => ({
    pagination: {
      page: 1,
      total: 100,
      totalPages: 7
    }
  }),
  methods: {
    _handleChangePageSize: (data) => {
      console.log('xavi ~: _handleChangePageSize -> data', data)
    },
    _handleChangePage (data) {
      console.log('Xavi ~... ~ file: TablePagination.vue ~ line 220 ~ _handleChangePage ~ data', data)
      this.pagination.page = data
    }
  }
};
</script>

<style lang="scss" scoped>
.md-pagination {
}
</style>