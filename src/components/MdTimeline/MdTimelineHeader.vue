<template>
  <div class="md-timeline-content__info">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'MdTimelineHeader'
}
</script>

<style lang="scss">
    .md-timeline-content__body{
    background: #F9F9FA;
    border-radius: 4px;
    padding: 12px;
  }
  .md-timeline-content__info{
    margin: 4px 0;
  }
</style>