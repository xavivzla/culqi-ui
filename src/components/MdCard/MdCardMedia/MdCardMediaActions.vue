<template>
  <div class="md-card-media-actions">
    <slot />
  </div>
</template>

<script>
export default {
  name: "MdCardMediaActions",
};
</script>

<style lang="scss">
.md-card-media-actions {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  &.md-new-card {
    width: 90%;
    margin: auto;
    text-align: left;
    .md-card-header {
      padding: 0;
    }
  }

  .md-card-media {
    $size: 240px;
    max-width: $size;
    max-height: $size;
    flex: 1;
  }
  .md-border {
    width: 40px;
    height: 40px;
    flex: none;
    margin: 0;
    img {
      width: 40px;
      height: 40px;
      border-radius: 3px;
    }
  }
  .md-card-header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .md-arrow {
      margin-right: 5px;
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        margin-right: 2px;
      }
    }
  }
  .md-card-header-text {
    font-family: "Archivo";
    font-weight: 600;
  }
  .md-card-actions {
    margin-left: 16px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    &.md-card-item {
      flex-direction: row;
      margin: 0;
      padding: 0;
      .md-button {
        margin: 0 !important;
        justify-content: flex-start;
      }
    }

    .md-button + .md-button {
      margin: 8px 0 0;
    }
  }
}
</style>
