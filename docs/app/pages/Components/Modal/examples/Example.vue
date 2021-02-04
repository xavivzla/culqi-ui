<template>
  <div>
    <md-modal :open="false">
      <md-modal-header>
        header
      </md-modal-header>
      <md-modal-body>
        body
      </md-modal-body>
      <md-modal-footer>
        footer
      </md-modal-footer>
    </md-modal>
  </div>
</template>

<script>
  export default {
    name: 'Example'
  }
</script>

<style lang="scss" scoped>
  .md-modal {
  }
</style>