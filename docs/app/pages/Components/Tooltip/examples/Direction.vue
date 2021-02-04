<template>
  <div>
    <md-avatar>
      <img src="/assets/examples/avatar.png" alt="Avatar">
      <md-tooltip md-direction="top">Top</md-tooltip>
    </md-avatar>

    <md-avatar>
      <img src="/assets/examples/avatar.png" alt="Avatar">
      <md-tooltip md-direction="right">Right</md-tooltip>
    </md-avatar>

    <md-avatar>
      <img src="/assets/examples/avatar.png" alt="Avatar">
      <md-tooltip md-direction="bottom">Bottom</md-tooltip>
    </md-avatar>

    <md-avatar>
      <img src="/assets/examples/avatar.png" alt="Avatar">
      <md-tooltip md-direction="left">Left</md-tooltip>
    </md-avatar>

    <p>max width</p>

    <md-avatar>
      <img src="/assets/examples/avatar.png" alt="Avatar">
      <md-tooltip md-direction="top" maxWidth="250" :md-active.sync="tooltipActive">Lorem ipsum,
        dolor sit amet consectetur adipisicing elit.
        Similique hic, facere officia consequatur officiis 
        eaque cumque magnam cupiditate vero doloribus esse, 
        saepe suscipit assumenda! A distinctio earum 
        accusantium consectetur eos.</md-tooltip>
    </md-avatar>
  </div>
</template>

<script>
  export default {
    name: 'Direction',
    data: () => ({
      tooltipActive: false
    })
  }
</script>

<style lang="scss" scoped>
  .md-avatar {
    margin: 36px;
  }
</style>
