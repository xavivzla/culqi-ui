<template>
  <div class="md-collapse-header" @click="_handleClickToggle" :class="open && 'active'">
    <span class="md-collapse-header__label">{{label}}</span>
    <md-icon>keyboard_arrow_down</md-icon>
  </div>
</template>

<script>
export default {
  name: "MdCollapseHeader",
  props: {
    open: Boolean,
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    _handleClickToggle() {
      this.$emit('toggleContent')
    },
  },
};
</script>

<style lang="scss">
.md-collapse-header {
  width: 100%;
  font-family: Archivo;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #1f263e;
  padding: 12px 16px;
  border-bottom: solid 1px #e2e5e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &__label {
    flex: 1;
  }
  i{
    transform: rotate(0);
    transition: all .3s ease-in-out;
  }
  &.active{
    i {
      transform: rotate(180deg);
    }
  }
}
</style>