<template>
  <div>
    <md-radio v-model="radio" :value="false">Boolean</md-radio>
    <md-radio v-model="radio" value="my-radio">String</md-radio>
    <md-radio v-model="radio" :value="objA">Object A</md-radio>
    <md-radio v-model="radio" :value="objB">Object B</md-radio>
    <md-radio v-model="radio">No Value (Default)</md-radio>
    <md-radio v-model="radio" class="md-primary" disabled>Disabled Primary</md-radio>
    <md-radio v-model="radio" class="md-secondary" disabled>Disabled Secondary</md-radio>

    <small>Model value: {{ radio }}</small>
  </div>
</template>

<script>
  export default {
    name: 'RegularRadio',
    data: () => ({
      objA: { name: 'a' },
      objB: { name: 'b' },
      radio: false
    })
  }
</script>

<style lang="scss" scoped>
  small {
    display: block;
  }
</style>
