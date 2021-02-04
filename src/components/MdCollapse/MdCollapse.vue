<template>
  <div class="md-collapse" :class="[$mdActiveTheme]">
    <md-collapse-header :open="open" :label="label" @toggleContent="_hadleClickToggleContent" />
    <md-collapse-body :open="open">
      <slot />
    </md-collapse-body>
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdCollapseHeader from './MdCollapseHeader'
  import MdCollapseBody from './MdCollapseBody'
  import MdCollapseFooter from './MdCollapseFooter'

  export default new MdComponent({
    name: 'MdCollapse',
    components: {
      MdCollapseHeader,
      MdCollapseBody,
      MdCollapseFooter
    },
    props: {
      label: {
        type: String,
        required: true
      }
    },
    data: () => ({
      open: true
    }),
    methods: {
      _hadleClickToggleContent () {
        this.open = !this.open
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-collapse {
    transition: .3s $md-transition-default-timing;
    border: 1px solid #E2E5E8;
    border-radius: 4px;
  }
</style>