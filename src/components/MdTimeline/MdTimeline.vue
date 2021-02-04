<template>
  <div class="md-timeline" :class="[$mdActiveTheme]">
    <ul class="md-timeline-list">
      <div class="md-timeline-title" v-if="title !== ''">
        {{title}}
      </div>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'

  export default new MdComponent({
    name: 'MdTimeline',
    props: {
      title: String
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-timeline-title{
    font-family: Archivo;
    font-style: normal;
    font-weight: 600;
    font-size: 14.22px;
    line-height: 20px;
    color: #1F263E;
    margin-bottom: 20px;
  }

  .md-timeline {
    transition: .3s $md-transition-default-timing;
    background: #FFFFFF;
    border: 1px solid #E2E5E8;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 20px;
  }

  .md-timeline-list{
    list-style: none;
    padding: 0;
    margin: 0;
    li:last-child{
      margin-bottom: 0px;
      .md-timeline-item-dot{
        &__linear{
          display: none;
        }
      }
    }
  }
</style>