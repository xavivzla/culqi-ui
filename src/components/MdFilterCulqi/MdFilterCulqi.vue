<template>
  <div class="md-filter-overlay" :class="[open ? 'md-filter-overlay-actived': '']">
    <div class="md-filter-culqi">
      <div class="md-filter" :class="[open ? 'md-filter-actived': '']">
        <div class="md-filter-body">
          <md-toolbar class="md-transparent md-top" md-elevation="0">
            <span class="md-title">Filtro</span>
            <span @click="_handleClickClose">
              <md-icon class="md-close-filter">close</md-icon>
            </span>
          </md-toolbar>

          <md-divider class="md-line-top"></md-divider>

          <md-list class="md-double-line">
            <template v-if="products && products.length">
              <md-subheader>PRODUCTOS</md-subheader>

              <div class="md-layout-item md-body-item md-raised md-primary">
                <md-field>
                  <md-select
                    v-model="data.product"
                    name="products"
                    id="products"
                    placeholder="Producto"
                  >
                    <md-option
                      v-for="product in products"
                      :key="product.value"
                      :value="product.value"
                    >{{product.name}}</md-option>
                  </md-select>
                </md-field>
              </div>
            </template>

            <template v-if="showPrices">
              <md-subheader>RANGO DE MONTOS</md-subheader>

              <div class="md-content-field md-body-item">
                <md-field class="md-content-field-item">
                  <span class="md-prefixs">S/</span>
                  <md-input v-model="data.minMoney" placeholder="Min."></md-input>
                </md-field>

                <md-icon>arrow_forward</md-icon>

                <md-field class="md-content-field-item">
                  <span class="md-prefixs">S/</span>
                  <md-input v-model="data.maxMoney" placeholder="Max."></md-input>
                </md-field>
              </div>
            </template>

            <template v-if="payments && payments.length">
              <md-subheader>MEDIO DE PAGO</md-subheader>

              <div class="md-content-radio md-body-item">
                <md-radio
                  v-for="payment in payments"
                  :key="payment.value"
                  v-model="data.payment"
                  :value="payment.value"
                  class="md-primary"
                >{{payment.name}}</md-radio>
              </div>
            </template>

            <template v-if="cardTypes && cardTypes.length">
              <md-subheader>TIPO DE TARJETA</md-subheader>

              <div class="md-content-checkbox md-body-item">
                <div v-for="item in cardTypes" :key="item.value">
                  <md-checkbox
                    v-model="data.cardTypes"
                    class="md-primary"
                    :value="item.value"
                  >{{item.name}}</md-checkbox>
                </div>
              </div>
            </template>
          </md-list>
        </div>

        <div class="md-bottom">
          <md-divider class="md-line-bottom"></md-divider>
          <md-button class="md-raised" @click="_handleClickClean">Limpiar filtros</md-button>
          <md-button class="md-raised md-primary" @click="_handleClickSearch">Aplicar</md-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MdComponent from "core/MdComponent";

export default new MdComponent({
  name: "MdFilterCulqi",
  props: {
    open: Boolean,
    products: Array,
    showPrices: Boolean,
    minMoney: {
      type: String,
      default: "",
    },
    maxMoney: {
      type: String,
      default: "",
    },
    payments: Array,
    cardTypes: Array,
  },
  data: () => ({
    data: {
      product: null,
      minMoney: "",
      maxMoney: "",
      payment: null,
      cardTypes: [],
    },
  }),
  created () {
    this.$parent.$on('cleanMdFilter', this._handleClickClean)
  },
  methods: {
    _handleClickClose() {
      this.$emit("close");
    },
    _handleClickSearch() {
      this.$emit("searchFilter", this.data);
      this._handleClickClose();
    },
    _handleClickClean() {
      this.data= {
        product: null,
        minMoney: "",
        maxMoney: "",
        payment: null,
        cardTypes: [],
      }
    },
    async _handleClickTrashClean() {
      await this.$emit("trash", this.data);
      this._handleClickClean()
    },
  },
});
</script>

<style lang="scss">
@import "~components/MdAnimation/variables";
// FILTRO

.md-menu-content {
  z-index: 1;
}
.code-example {
  overflow: hidden;
}

</style>
