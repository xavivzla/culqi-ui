<template>
  <div>
    <div class="separator">
      <md-avatar class="md-small md-border">
        <img src="/assets/examples/avatar.png" alt="People" />
      </md-avatar>

      <md-avatar class="md-avatar-icon md-small md-border">
        <md-icon>home</md-icon>
      </md-avatar>

      <md-avatar class="md-avatar-icon md-small md-primary md-border">
        <md-icon>folder</md-icon>
      </md-avatar>

      <md-avatar class="md-avatar-icon md-small md-accent md-border">
        <md-icon>favorite</md-icon>
      </md-avatar>
    </div>

    <div class="separator">
      <md-avatar class="md-border">
        <img src="/assets/examples/avatar.jpg" alt="Avatar" />
      </md-avatar>

      <md-avatar class="md-avatar-icon md-border">
        <md-icon>home</md-icon>
      </md-avatar>

      <md-avatar class="md-avatar-icon md-primary md-border">
        <md-icon>folder</md-icon>
      </md-avatar>

      <md-avatar class="md-avatar-icon md-accent md-border">
        <md-icon>favorite</md-icon>
      </md-avatar>
    </div>

    <div class="separator">
      <md-avatar class="md-large md-border">
        <img src="/assets/examples/avatar-2.jpg" alt="People" />
      </md-avatar>

      <md-avatar class="md-avatar-icon md-large md-border">
        <md-icon>home</md-icon>
      </md-avatar>

      <md-avatar class="md-avatar-icon md-large md-primary md-border">
        <md-icon>folder</md-icon>
      </md-avatar>

      <md-avatar class="md-avatar-icon md-large md-accent md-border">
        <md-icon>favorite</md-icon>
      </md-avatar>
    </div>

    <div class="separator">
      <div class="md-menu-btn">
        <md-avatar class="md-border">
          <img src="/assets/examples/avatar-2.jpg" alt="People" />
        </md-avatar>
        <div class="md-arrow">
          <md-icon>keyboard_arrow_down</md-icon>
        </div>
      </div>
      <!--
    <md-avatar class="md-avatar-icon md-large md-border">
      <md-icon>home</md-icon>
    </md-avatar>

    <md-avatar class="md-avatar-icon md-large md-primary md-border">
      <md-icon>folder</md-icon>
    </md-avatar>

    <md-avatar class="md-avatar-icon md-large md-accent md-border">
      <md-icon>favorite</md-icon>
      </md-avatar>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Squared",
};
</script>

<style lang="scss" scoped>
.separator + .separator {
  margin-top: 24px;
}
.md-menu-btn {
  display: flex;
  flex-direction: row;
  width: 60px;
  background-color: #333333;
  border-radius: 4px;
  .md-arrow {
    display: flex;
    align-items: center;
    .md-icon {
      color: #ffffff;
    }
  }
}
// .md-border {
//   border-radius: 3px;
// }
</style>
