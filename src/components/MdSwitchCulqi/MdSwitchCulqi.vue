<template>
  <div class="md-switch-culqi"
  :class="[$mdActiveTheme, checkClasses]"
  @click="selectCurrency"
  >
    <div class="md-switch-culqi-container">
      <div class="md-ripple-currency"
      @click="switchCurrency(1)"
      :class="[data.currentCurrency === 1 ? 'md-ripple-currency-checked' : '']"
      >
        <span>Soles</span>
      </div>
      <div class="md-ripple-currency"
      @click="switchCurrency(2)"
      :class="[data.currentCurrency === 2 ?'md-ripple-currency-checked' : '' ]"
      >
        <span>Dólares</span>
      </div>
    </div>
  </div>
</template>

<script>
import MdComponent from "core/MdComponent";
import MdCheckboxMixin from "components/MdCheckbox/MdCheckboxMixin";
import MdUuid from "core/utils/MdUuid";

export default new MdComponent({
  name: "MdSwitchCulqi",
  mixins: [MdCheckboxMixin],
  props: {
  },
  data: () => ({
    data: {
      currentCurrency: 1,
    },
    currency: ''
  }),
  methods: {
    selectCurrency() {
      this.$emit("select", this.data.currentCurrency);
    },
    switchCurrency(currencyCode) {
      this.data.currentCurrency = currencyCode
    },
  },
});
</script>

<style lang="scss">
@import "~components/MdAnimation/variables";
@import "~components/MdElevation/mixins";

$md-switch-culqi-width: 135px;
$md-switch-culqi-height: 36px;
$md-switch-culqi-radius: px36px;
$md-switch-culqi-size: 20px;
$md-switch-culqi-touch-size: 48px;

.md-switch-culqi {
  width: auto;
  margin: 16px 16px 16px 0;
  display: inline-flex;
  position: relative;

  &:not(.md-disabled) {
    cursor: pointer;

    .md-switch-culqi-label {
      cursor: pointer;
    }
  }

  .md-switch-culqi-container {
    width: $md-switch-culqi-width;
    min-width: $md-switch-culqi-width;
    height: $md-switch-culqi-height;
    margin: 3px 0;
    display: flex;
    align-items: center;
    position: relative;
    border-radius: $md-switch-culqi-radius;
    transition: $md-transition-stand;
  }
}
</style>
