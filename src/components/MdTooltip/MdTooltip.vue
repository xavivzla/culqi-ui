<template>
  <md-popover :md-settings="popperSettings" :md-active="shouldRender">
    <transition name="md-tooltip" v-if="shouldRender">
      <div class="md-tooltip" :class="[tooltipClasses, $mdActiveTheme]" :style="tooltipStyles">
        <slot />
        <div class="md-tooltip-arrow"></div>
      </div>
    </transition>
  </md-popover>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdPropValidator from 'core/utils/MdPropValidator'
  import MdPopover from 'components/MdPopover/MdPopover'

  export default new MdComponent({
    name: 'MdTooltip',
    components: {
      MdPopover
    },
    props: {
      maxWidth: [String, Number],
      mdActive: Boolean,
      mdDelay: {
        type: [String, Number],
        default: 0
      },
      mdDirection: {
        type: String,
        default: 'bottom',
        ...MdPropValidator('md-direction', ['top', 'right', 'bottom', 'left'])
      }
    },
    data: () => ({
      shouldRender: false,
      targetEl: null
    }),
    computed: {
      tooltipClasses () {
        return 'md-tooltip-' + this.mdDirection
      },
      tooltipStyles () {
        let styleCss = `transition-delay: ${this.mdDelay}ms;`
        if (this.maxWidth) {
          styleCss += `max-width: ${this.maxWidth}px;
          height: auto; white-space: normal;`
        }
        return styleCss
      },
      popperSettings () {
        return {
          placement: this.mdDirection,
          modifiers: {
            offset: {
              offset: '0, 16'
            }
          }
        }
      }
    },
    watch: {
      mdActive () {
        this.shouldRender = this.mdActive
      },
      shouldRender (shouldRender) {
        this.$emit('update:mdActive', shouldRender)
      }
    },
    methods: {
      show () {
        this.shouldRender = true
      },
      hide () {
        this.shouldRender = false
      }
    },
    mounted () {
      this.$nextTick().then(() => {
        this.shouldRender = this.mdActive
        this.targetEl = this._vnode.componentInstance.originalParentEl

        if (this.targetEl) {
          this.targetEl.addEventListener('mouseenter', this.show, false)
          this.targetEl.addEventListener('mouseleave', this.hide, false)
        }
      })
    },
    beforeDestroy () {
      if (this.targetEl) {
        this.targetEl.removeEventListener('mouseenter', this.show)
        this.targetEl.removeEventListener('mouseleave', this.hide)
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdLayout/mixins";

  $md-tooltip-height: 22px;
  $md-tooltip-height-mobile: 32px;

  .md-tooltip {
    height: $md-tooltip-height;
    padding: 6px 12px;
    position: fixed;
    z-index: 111;
    pointer-events: none;
    border-radius: 4px;
    transition: .15s $md-transition-enter-timing;
    transition-property: opacity, transform;
    will-change: opacity, transform, top, left !important;
    font-size: 10px;
    line-height: 16px;
    text-transform: none;
    white-space: nowrap;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 10px 10px 10px;
      margin: auto;
    }

    &.md-tooltip-top {
        &:after {
          bottom: 0;
          left: 0;
          right: 0;
          transform: rotate(180deg) translateY(-7px);
        }
      }

      &.md-tooltip-right {
        &:after {
          bottom: 0;
          top: 0;
          left: 0;
          transform: rotate(-90deg) translateY(-11px);
        }
      }

      &.md-tooltip-bottom {
        &:after {
          top: 0;
          left: 0;
          right: 0;
          transform: rotate(0deg) translateY(-7px);
        }
      }

      &.md-tooltip-left {
        &:after {
          bottom: 0;
          right: 0;
          top: 0;
          transform: rotate(90deg) translateY(-11px);
        }
      }

    @include md-layout-small {
      height: $md-tooltip-height-mobile;
      font-size: 14px;
      line-height: $md-tooltip-height-mobile;
    }

    &.md-tooltip-leave-active {
      transition-timing-function: $md-transition-leave-timing;
    }

    &.md-tooltip-enter,
    &.md-tooltip-leave-active {
      opacity: 0;

      &.md-tooltip-top {
        transform: translate3d(0, 4px, 0) scale(.95);
      }

      &.md-tooltip-right {
        transform: translate3d(-4px, 0, 0) scale(.95);
      }

      &.md-tooltip-bottom {
        transform: translate3d(0, -4px, 0) scale(.95);
      }

      &.md-tooltip-left {
        transform: translate3d(4px, 0, 0) scale(.95);
      }
    }
  }
</style>
