<template>
  <div class="md-modal-body">
    <slot />
  </div>
</template>

<script>
export default {
  name: "MdModalBody",
};
</script>

<style lang="scss">
.md-modal-body {
  height: 100%;
  overflow: auto;
  padding-right: 20px;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(0deg, 0%, 0%);
    border-radius: 15px;
    box-shadow: inset 7px 7px 12px #3cb4e5;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(0deg, #3cb4e5 0%, #3cb4e5 0%);
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 0px;
    box-shadow: inset 7px 10px 12px #f0f0f0;
  }
}
</style>