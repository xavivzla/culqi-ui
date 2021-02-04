<template>
  <div>
    <md-calendar v-model="crr" :md-dates="values" />
  </div>
</template>

<script>
  export default {
    name: 'Example',
    data: () => ({
      crr: '',
      values: [
        {
          date: new Date(),
          icons: [
            'pos',
            'online'
          ],
          contents: [
            {
              type: 'string',
              value: 'S/ 45,778.98',
            },
            {
              type: 'chip',
              value: 'Depositada',
              status: 'deposit',
            }
          ]
        },
        {
          date: 'Thu Dec 02 2020 15:58:50 GMT-0500 (hora estándar de Colombia)',
          icons: [
            'pos', 
          ],
          contents: [
            {
              type: 'string',
              value: 'S/ 5,778.98',
            },
            {
              type: 'chip',
              value: 'Rechazado',
              status: 'deposit',
            }
          ]
        },
      ]
    }),
    // computed: {
    //   formattedDate() {
    //     return dateFns.format(this.curr, 'MM/DD/YYYY');
    //   }
    // },
  }
</script>

<style lang="scss" scoped>
  .md-calendar {

  }
</style>