<template>
  <div class="md-collapse-content" ref="collapseContent" :style="{height: dinamyHeight}">
    <div class="md-collapse-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MdCollapseBody',
  props: {
    open: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    height: 'auto'
  }),
  mounted () {
    this.height = this.$refs.collapseContent.clientHeight
  },
  computed: {
    dinamyHeight () {
      return this.open ? `${this.height}px` : '0'
    }
  }
}
</script>

<style lang="scss">
  .md-collapse-content{
    overflow: hidden;
    transition: all .3s ease-in;
  }
  .md-collapse-body{
    padding: 16px;
  }
</style>