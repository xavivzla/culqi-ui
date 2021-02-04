<template>
  <div class="md-timeline-content" v-if="timelineData.open">
    <div class="md-timeline-content__action">
      <md-button class="md-primary" @click="_handleChange">Ver menos</md-button>
    </div>
    <div class="md-timeline-content__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MdTimelineBody',
  inject: ['timelineData'],
  methods: {
    _handleChange () {
      this.timelineData.open = !this.timelineData.open;
    }
  }
}
</script>

<style lang="scss">
    .md-timeline-content__body{
    background: #F9F9FA;
    border-radius: 4px;
    padding: 12px;
  }
</style>