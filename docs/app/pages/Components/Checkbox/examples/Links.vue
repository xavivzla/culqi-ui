<template>
  <div>
    <md-checkbox v-model="boolean">link <a href="/link3" target="__blank">link</a></md-checkbox>
    <md-checkbox v-model="boolean">link <a href="/link2" target="__blank">link 2</a></md-checkbox>
    <md-checkbox v-model="boolean">link <a href="/link3" target="__blank">link 3</a></md-checkbox>

  </div>
</template>

<script>
  export default {
    name: 'LinkCheckbox',
    data: () => ({
      boolean: false,
    })
  }
</script>

<style lang="scss" scoped>
  .md-checkbox {
    display: flex;
  }
</style>
