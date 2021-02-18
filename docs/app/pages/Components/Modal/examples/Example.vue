<template>
  <div>
    <md-button @click="_handleClick">Show</md-button>

    <md-modal :md-active.sync="showModal">
      <md-modal-header>
        header
      </md-modal-header>
      <md-modal-body>
        body
      </md-modal-body>
      <md-modal-footer>
        <md-button @click="_handleClick">Cancel</md-button>
      </md-modal-footer>
    </md-modal>
  </div>
</template>

<script>
  export default {
    name: 'Example',
    data: () => ({
      showModal: false
    }),
    methods: {
      _handleClick () {
        this.showModal = !this.showModal
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-modal {
  }
</style>