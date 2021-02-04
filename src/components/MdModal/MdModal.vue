<template>
  <div class="md-modal" :class="[$mdActiveTheme]" v-if="open">
      <div class="md-modal-wrapper">
        <div class="md-modal-container" :style="{maxWidth: maxWidth + 'px'}">
          <slot/>
        </div>
      </div>
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'

  export default new MdComponent({
    name: 'MdModal',
    props: {
      maxWidth: {
        type: String,
        required: false,
        default: '320'
      },
      open: {
        type: Boolean,
        required: true
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-modal {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
    &-wrapper {
       display: table-cell;
      vertical-align: middle;
    }
    &-container {
      width: 100%;
      margin: 0px auto;
      padding: 20px 30px;
      background-color: #fff;
      border-radius: 2px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
      transition: all .3s ease;
      font-family: Helvetica, Arial, sans-serif;
    }
  }
</style>