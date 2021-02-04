<template>
  <div>
    <div>
      <small>Flat</small>
      <md-button>Default</md-button>
      <md-button :md-ripple="false">Ripple Off</md-button>
      <md-button class="md-primary">Primary</md-button>
      <md-button class="md-secondary">Secondary</md-button>
      <md-button class="md-accent">Accent</md-button>
      <md-button disabled>Disabled</md-button>
    </div>

    <div>
      <small>Outline</small>
      <md-button class="md-outlined">Default</md-button>
      <md-button class="md-outlined" :md-ripple="false">Ripple Off</md-button>
      <md-button class="md-outlined md-primary">Primary</md-button>
      <md-button class="md-outlined md-secondary">Secondary</md-button>
      <md-button class="md-outlined md-accent">Accent</md-button>
      <md-button class="md-outlined md-secondary" disabled>Disabled</md-button>
    </div>

    <div>
      <small>Raised</small>
      <md-button class="md-raised">Default</md-button>
      <md-button class="md-raised" :md-ripple="false">Ripple Off</md-button>
      <md-button class="md-raised md-primary">Primary</md-button>
      <md-button class="md-raised md-secondary">Secondary</md-button>
      <md-button class="md-raised md-accent">Accent</md-button>
      <md-button class="md-raised md-secondary" disabled>Disabled</md-button>
    </div>

    <div>
      <small>Dense</small>
      <md-button class="md-dense md-primary">Flat</md-button>
      <md-button class="md-dense md-raised md-secondary">Secondary</md-button>
      <md-button class="md-dense md-raised md-primary">Raised</md-button>
    </div>

    <div>
      <small>Text and Icon</small>
      <md-button class="md-button-icon">
        <md-icon>home</md-icon>
        <span>Home</span>
      </md-button>

      <md-button class="md-button-icon md-primary">
        <md-icon>home</md-icon>
        <span>Home</span>
      </md-button>
      <md-button class="md-button-icon md-raised md-primary">
        <md-icon>home</md-icon>
        <span>Home</span>
      </md-button>
      <md-button class="md-button-icon md-raised md-dense md-primary">
        <md-icon>home</md-icon>
        <span>Home</span>
      </md-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  small {
    display: block;
  }
</style>

<script>
  export default {
    name: 'RegularButtons'
  }
</script>
