<template>
  <div>
    <md-card>
      <md-card-media-actions class="md-new-card">
        <md-card-header>
          <md-avatar class="md-border">
            <img src="/assets/examples/avatar.jpg" alt="Avatar" />
          </md-avatar>
        </md-card-header>
        <md-icon class="md-arrow md-arrow-hover">arrow_forward</md-icon>

        <md-card-header-text>
          <div class="md-title">Industrias San Miguel</div>
        </md-card-header-text>

        <md-card-actions class="md-card-item">
          <md-button class="md-icon-button" :disabled="online">
            <md-icon>comment</md-icon>
          </md-button>

          <md-button class="md-icon-button" :disabled="express">
            <md-icon>shopping_cart</md-icon>
          </md-button>

          <md-button class="md-icon-button " :disabled="pos">
            <md-icon >calculate</md-icon>
          </md-button>
        </md-card-actions>
      </md-card-media-actions>
    </md-card>

    <md-card>
      <md-card-media-actions class="md-new-card">
        <md-card-header>
          <md-avatar class="md-avatar-icon  md-border">
        A
          </md-avatar>
        </md-card-header>
        <md-icon class="md-arrow md-arrow-hover">arrow_forward</md-icon>

        <md-card-header-text>
          <div class="md-title">Industrias San Miguel</div>
        </md-card-header-text>

        <md-card-actions class="md-card-item">
          <md-button class="md-icon-button">
            <md-icon>comment</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>shopping_cart</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>calculate</md-icon>
          </md-button>
        </md-card-actions>
      </md-card-media-actions>
    </md-card>
  </div>
</template>

<style lang="scss" scoped>
.md-card {
  width: 320px;
  height: 72px;
  margin: 4px;
  display: inline-block !important;
  vertical-align: middle;
  @media screen and(min-width: 800px) {
  width: 248px;
  height: 176px !important;
  display: flex;
  align-items: center;
  }
 .md-arrow {
   margin-right: 0 !important;
  }
  .md-arrow-hover {
    &:hover {
      margin-right: -5px !important;
      transition: 0.5s all;
      cursor: pointer;
    }
  }
}
</style>

<script>
export default {
  name: "NewCard",
  data: () => ({
    online: false,
    express: false,
    pos: true,
  }),
};
</script>
