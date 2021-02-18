<template>
  <md-portal>
    <div class="md-modal" :class="[$mdActiveTheme]" v-if="mdActive" @keydown.esc="onEsc">
      <md-focus-trap>
        <div class="md-modal-wrapper" :style="{maxWidth: maxWidth + 'px'}">
          <div class="md-modal-container">
            <slot/>

              <keep-alive>
                <md-overlay :class="mdBackdropClass" md-fixed :md-active="mdActive" @click="onClick" v-if="mdBackdrop"/>
              </keep-alive>
          </div>
        </div>
      </md-focus-trap>
    </div>
  </md-portal>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdPortal from 'components/MdPortal/MdPortal'
  import MdOverlay from 'components/MdOverlay/MdOverlay'
  import MdFocusTrap from 'components/MdFocusTrap/MdFocusTrap'

  export default new MdComponent({
    name: 'MdModal',
    components: {
      MdPortal,
      MdOverlay,
      MdFocusTrap
    },
    props: {
      maxWidth: {
        type: String,
        required: false,
        default: '320'
      },
      mdCloseOnEsc: {
        type: Boolean,
        default: true
      },
      mdBackdrop: {
        type: Boolean,
        default: true
      },
      mdBackdropClass: {
        type: String,
        default: 'md-dialog-overlay'
      },
      mdClickOutsideToClose: {
        type: Boolean,
        default: true
      },
      mdActive: {
        type: Boolean,
        required: true
      }
    },
    watch: {
      mdActive (isActive) {
        this.$nextTick().then(() => {
          if (isActive) {
            this.$emit('md-opened')
          } else {
            this.$emit('md-closed')
          }
        })
      }
    },
    methods: {
      closeDialog () {
        this.$emit('update:mdActive', false)
      },
      onClick () {
        if (this.mdClickOutsideToClose) {
          this.closeDialog()
        }
        this.$emit('md-clicked-outside');
      },
      onEsc () {
        if (this.mdCloseOnEsc) {
          this.closeDialog()
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdLayout/mixins";
  @import "~components/MdElevation/mixins";

  $opacity-transition-duration: .15s;
  $transform-transition-duration: .20s;
  $max-duration: max($opacity-transition-duration, $transform-transition-duration);
  
  .md-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    display: flex;
    transition-duration: $max-duration;
    z-index: 110;
    &-wrapper {
      width: 90%;
      @include md-elevation(24);
      min-width: 280px;
      max-width: 80%;
      max-height: 80%;
      margin: auto;
      display: flex;
      flex-flow: column;
      overflow: hidden;
      border-radius: 2px;
      backface-visibility: hidden;
      pointer-events: auto;
      opacity: 1;
      transform-origin: center center;
      transition: opacity $opacity-transition-duration $md-transition-stand-timing, transform $transform-transition-duration $md-transition-stand-timing;
      will-change: opacity, transform;
    }
    &-container {
      background: #fff;
      // box-shadow: 0px 8px 12px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31);
      border-radius: 4px;
      padding: 20px;
      max-height: 60vh;
      display: flex;
      flex-direction: column;
    }
  }
</style>