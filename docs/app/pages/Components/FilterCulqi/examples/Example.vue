<template>
  <div style>
    <md-filter-culqi
      :payments="payments"
      :products="products"
      showPrices
      :cardTypes="cards"
      @close="_handleCliclOpenFilter"
      @searchFilter="_handleClickSearch"
      :open="showFilter"
      @trash="borrar"
    />

    <md-button class="md-button-icon" @click="_handleCliclOpenFilter">
      <md-icon>filter_list</md-icon>
      <span>Filtros</span>
    </md-button>
    <md-button class="md-button-icon" @click="borrar">
      <md-icon>filter_list</md-icon>
      <span>borrar</span>
    </md-button>
  </div>
</template>

<script>
export default {
  name: "Example",
  data: () => ({
    data: {
      product: null,
      minMoney: "",
      maxMoney: "",
      payment: null,
      cardTypes: [],
    },
    showFilter: false,
    filterClean: false,
    products: [
      {
        name: "Culqi Online",
        value: "culqi online",
      },
      {
        name: "Culqi Express",
        value: "culqi express",
      },
      {
        name: "Culqi pos",
        value: "culqi pos",
      },
    ],
    payments: [
      {
        name: "Tarjeta",
        value: "tarjeta",
      },
      {
        name: "Efectivo",
        value: "efectivo",
      },
    ],
    cards: [
      {
        value: "amex",
        name: "AMEX",
      },
      {
        value: "dinersclub",
        name: "DINERSCLUB",
      },
      {
        value: "visa",
        name: "VISA",
      },
      {
        value: "mastercard",
        name: "MASTERCARD",
      },
    ],
  }),
  methods: {
    _handleCliclOpenFilter() {
      this.showFilter = !this.showFilter;
    },
    _handleClickSearch(data) {
      this.data = {
        product: data.product,
        minMoney: data.minMoney,
        maxMoney: data.maxMoney,
        payment: data.payment,
        cardTypes: [...data.cardTypes],
      };
    },
    borrar(data) {
      this.data = {
        product: null,
        minMoney: "",
        maxMoney: "",
        payment: null,
        cardTypes: [],
      };
      this.$emit("cleanMdFilter");
    },
  },
};
</script>

<style lang="scss" scoped>
// .md-filter-culqi {
//   height: 70vh !important;
// }
</style>
