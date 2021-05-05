<template>
  <div>
    <md-button @click="_handleClick">Show</md-button>

    <md-modal :md-active.sync="showModal" :md-click-outside-to-close="false">
      <md-modal-header>
        header
      </md-modal-header>
      <md-modal-body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aut possimus rem cum deserunt optio perspiciatis iusto nemo beatae dolorum, atque neque minus quaerat error, architecto eius eveniet dignissimos asperiores ducimus. In autem ipsam impedit laboriosam deserunt? Illum suscipit velit temporibus quam corrupti dignissimos quae voluptatum dolorum aperiam, placeat tempore consequatur quidem ipsam voluptatibus doloribus tenetur, ipsa officia iste eius autem dolor. Obcaecati officia voluptate, ullam suscipit sequi quam alias iusto nemo inventore temporibus earum iste debitis deserunt fugiat adipisci laudantium voluptates quas. Dolores consequatur asperiores culpa doloremque, sed voluptatum itaque ut dolor odit tenetur ipsum saepe ea vel a, quibusdam cumque est? Voluptates eaque amet ea eveniet, nulla sint 
      </md-modal-body>
      <md-modal-footer>
        <md-button @click="_handleClick">Cancel</md-button>
        <md-button @click="_handleClickRedirect">Redirect</md-button>
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
      _handleClickRedirect () {
        console.log(this.$router.push('/'))
      },
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