<template>
  <div class="md-avatar-media-actions">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'MdavatarMediaActions'
  }
</script>

<style lang="scss">
  .md-avatar-media-actions {
    padding: 16px;
    display: flex;
    justify-content: space-between;

    .md-avatar-media {
      $size: 240px;

      max-width: $size;
      max-height: $size;
      flex: 1;
    }

    .md-avatar-actions {
      margin-left: 16px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      .md-button + .md-button {
        margin: 8px 0 0;
      }
    }
  }
</style>
