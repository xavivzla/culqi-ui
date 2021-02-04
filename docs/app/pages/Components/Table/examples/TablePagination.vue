<template>
  <div>
    <md-table v-model="users" md-card class="prueba" :collapse="true" :collapse-data="{
      rows: [
        [
          'url',
          'referencia',
          'ip'
        ],
        [
          'urlTwo',
          'canal',
          'navegador'
        ]
      ],
      hide: [
        'detail'
      ],
      codes : [
        {
          value: 'detail.responseBody',
          type: 'responseBody'
        },
        {
          value: 'detail.requestBody',
          type: 'requestBody'
        }
      ]
    }">
      <md-table-toolbar class="md-hidden-mobile">
        <h1 class="md-title">Users</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" class="table-mode-mobile md-pointer" slot-scope="{ item }">
        <md-table-cell v-for="(column, index) in item" :key="column.id" :md-label="index">
          <md-icon class="only-visible-768">
            shopping_cart
          </md-icon>
          {{ column }}</md-table-cell>

        <template v-slot:collapse>
          <md-table-collapse />
        </template>
      </md-table-row>

      <md-table-pagination
        mdPageSize="25"
        :mdPage="pagination.page"
        :mdTotalPage="pagination.totalPages"
        @update:mdPageSize="_handleChangePageSize"
        @update:mdPage="_handleChangePage"
      />
    </md-table>
  </div>
</template>

<script>
import otherSvg from '../../../../../assets/upload.svg'
export default {
  name: 'TablePagination',
  data: () => ({
    users: [
      {
        id: 1,
        prod: 'expres',
        email: "cmarietonh@theatlantic.com",
        monto: "804.20",
        tarjeta: '1111*****1111 ',
        status: "Depositada",
        time: "14/05/2020 - 11:34:21",
        fraude: 'fraude',
        url: 'url',
        referencia: 'ref',
        ip: '1.0.0.0',
        canal: 'canal',
        urlTwo: 'url two',
        peeticion: 'peticion',
        navegador: 'nav',
        desc: '!!',
        detail: {
          responseBody: {
            host: "rate-dev.culqi.xyz",
            clientIp: "181.65.24.217",
            expirationMonth: "09",
            email: "demo@culqi.com",
            apiKey: "tkn_live_3lWPEbX7jg20kO5x",
            cvv: "123",
            expirationYear: "2025",
            cardNumber: "4557887890111111",
            metadata: {
              "apiLog": "Suxxes",
              "dni": "5831543"
            },
            userAgent: "PostmanRuntime/7.24.1"
          },
          requestBody: {
            host: "rate-dev.culqi.xyz",
            clientIp: "181.65.24.217",
            expirationMonth: "09",
            email: "demo@culqi.com",
            cardNumber: "4557887890111111",
            cvv: "*",
            expirationYear: "2025",
            apiKey: "tkn_live_3lWPEbX7jg20kO5x",
            metadata: {
              apiLog: "Suxxes",
              dni: "5831543"
            },
            userAgent: "PostmanRuntime/7.24.1"
          }
        }
      },
      {
        id: 2,
        prod: 'expres2',
        email: "cmarietonh@theatlantic.com",
        monto: "804.20",
        tarjeta: '1111*****1111 ',
        status: "Depositada",
        time: "14/05/2020 - 11:34:21",
        fraude: 'fraude',
        url: '-',
        referencia: '-',
        ip: '0.0.0.0',
        canal: '-',
        urlTwo: '-',
        peticion: '_',
        navegador: '-',
        desc: '_',
        detail: {
          responseBody: {
            host: "rate-dev.culqi.xyz",
            clientIp: "181.65.24.217",
            expirationMonth: "09",
            email: "demo@culqi.com",
            apiKey: "tkn_live_3lWPEbX7jg20kO5x",
            cvv: "123",
            expirationYear: "2025",
            cardNumber: "4557887890111111",
            metadata: {
              "apiLog": "Suxxes",
              "dni": "5831543"
            },
            userAgent: "PostmanRuntime/7.24.1"
          },
          requestBody: {
            host: "rate-dev.culqi.xyz",
            clientIp: "181.65.24.217",
            expirationMonth: "09",
            email: "demo@culqi.com",
            cardNumber: "4557887890111111",
            cvv: "*",
            expirationYear: "2025",
            apiKey: "tkn_live_3lWPEbX7jg20kO5x",
            metadata: {
              apiLog: "Suxxes",
              dni: "5831543"
            },
            userAgent: "PostmanRuntime/7.24.1"
          }
        }
      }
    ],
    pagination: {
      page: 1,
      total: 100,
      totalPages: 7
    }
  }),
  // computed: {
  //   tableComputed: function () {
  //     return this.users.map(data => {
  //       const {
  //         prod,
  //         email,
  //         tarjeta,
  //         status,
  //         time,
  //         active,
  //         url,
  //         referencia,
  //         ip,
  //         url2,
  //         canal,
  //         navegador
  //       } = data
  //       return ({
  //         active,
  //         item: {
  //           prod,
  //           email,
  //           tarjeta,
  //           status,
  //           time
  //         },
  //         collapse: {
  //           rows: [
  //             {
  //               url,
  //               referencia,
  //               ip
  //             },
  //             {
  //               url2,
  //               canal,
  //               navegador
  //             }
  //           ],
  //         }
  //       })
  //     })
  //   }
  // },
  methods: {
    _handleChangePageSize: (data) => {
      console.log('xavi ~: _handleChangePageSize -> data', data)
    },
    _handleChangePage (data) {
      console.log('Xavi ~... ~ file: TablePagination.vue ~ line 220 ~ _handleChangePage ~ data', data)
      this.pagination.page = data
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-table + .md-table {
    margin-top: 16px
  }
  .prueba {
    @media screen and (max-width: 768px) {
      max-width: 376px;
    }
  }
  .md-pointer {
    cursor: pointer;
  }
  .md-hidden-mobile {
    @media screen and (max-width: 769px) {
      display: none;
    }
  }
  .only-visible-768 {
    @media screen and (min-width: 769px) {
      display: none;
    }
  }
</style>
