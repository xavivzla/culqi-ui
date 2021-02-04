<template>
  <md-icon class="md-icon-image" v-once>
    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.15005 7.75L0.550049 1.15L1.45005 0.25L7.15005 5.95L12.55 0.45L13.45 1.45L7.15005 7.75Z" fill="#677487"/>
</svg>

    <!-- <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 10l5 5 5-5z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg> -->
  </md-icon>
</template>

<script>
  import MdIcon from 'components/MdIcon/MdIcon'

  export default {
    name: 'MdDropDownIcon',
    components: {
      MdIcon
    }
  }
</script>

<style lang="scss">
.md-menu.md-select .md-icon-image {
  svg {
    height: 8px !important;
  }
}
</style>
