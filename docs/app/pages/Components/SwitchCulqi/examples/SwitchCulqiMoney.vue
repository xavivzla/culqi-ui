<template>
  <div>
    <md-switch-culqi class="md-money md-primary"
    @select="currencyCode"
    />
    <table>
      <tr>
        <th>Currency</th>
      </tr>

      <tr>
        <td>{{ currency }}</td>
      </tr>

    </table>

  </div>
</template>

<script>
export default {
  name: "SwitchMoney",
  data: () => ({
    currency: 'soles'
  }),
  methods: {
    currencyCode(currencySelect) {
      this.currency = currencySelect == 1 ? 'soles' : 'dolares'
    },
  },
};
</script>

<style lang="scss" scoped>

table {
  width: 100%;
  table-layout: fixed;

  th {
    text-align: left;
  }
}
</style>
