<template>
  <td class="md-table-cell" :class="cellClasses">
    <div class="md-table-cell-container">
      <div v-if="status" class="md-status" :class="statusClass">
        <span />
        {{status}}
      </div>
      <slot v-else />
    </div>
  </td>
</template>

<script>
  export default {
    name: 'MdTableCell',
    props: {
      mdId: [String, Number],
      mdLabel: String,
      mdNumeric: Boolean,
      mdTooltip: String,
      mdSortBy: String,
      mdIcon: [String],
      status: String
    },
    inject: ['MdTable'],
    data: () => ({
      index: null,
      parentNode: null
    }),
    computed: {
      cellClasses () {
        return {
          'md-numeric': this.mdNumeric
        }
      },
      // eslint-disable-next-line complexity
      statusClass () {
        switch (this.status) {
        case 'pendiente':
          return 'status-pendint' // gray

        case 'Exitosa'    :
        case 'Registrada' :
        case 'Autorizada' :
        case 'Capturada'  :
        case 'Capturar'   :
        case 'Autorizar'  :
        case 'Deposito'   :
        case 'Exito'      :
          return 'status-complete' // green

        case 'Devuelta'           :
        case 'Retenida'           :
        case 'Cancelacion parcial':
        case 'Devolver'           :
        case 'Expirar'            :
          return 'status-return' // orange

        case 'Depositada' :
        case 'Registrar'  :
        case 'Pagar'      :
        case 'Crear'      :
          return 'status-deposit' // blue

        case 'Denegada'         :
        case 'Denegar'          :
        case 'Anulada'          :
        case 'Fraudulenta'      :
        case 'Cancelacion total':
        case 'Sostener'         :
        case 'Fraude'           :
        case 'Borrar'           :
          return 'status-denied' // red

        default:
          return {}
        }
      }
    },
    watch: {
      mdSortBy () {
        this.setCellData()
      },
      mdNumeric () {
        this.setCellData()
      },
      mdLabel () {
        this.setCellData()
      },
      mdTooltip () {
        this.setCellData()
      },
      mdIcon () {
        this.setCellData()
      }
    },
    methods: {
      setCellData ($vm = this) {
        this.$set(this.MdTable.items, $vm.index, {
          id: $vm.mdId,
          label: $vm.mdLabel,
          numeric: $vm.mdNumeric,
          tooltip: $vm.mdTooltip,
          icon: $vm.mdIcon,
          sortBy: $vm.mdSortBy
        })
      },
      updateAllCellData () {
        this.MdTable.items = {}

        const cells = Array.from(this.parentNode.childNodes).filter(({ tagName, classList }) => {
          const isSelection = classList && classList.contains('md-table-cell-selection')
          const isTd = tagName && tagName.toLowerCase() === 'td'

          return isTd && !isSelection
        })

        cells.forEach((cell, index) => {
          const $vm = cell.__vue__

          $vm.index = index

          this.setCellData($vm)
        })
      }
    },
    mounted () {
      this.parentNode = this.$el.parentNode
      this.updateAllCellData()
    },
    destroyed () {
      const rowRemoved = this.$el.parentNode !== null

      if (rowRemoved) {
        return false
      }

      this.updateAllCellData()
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-status {
    background: #E2E5E8;
    border: 1px solid #D4D8DD;
    box-sizing: border-box;
    border-radius: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    font-family: Archivo;
    font-style: normal;
    font-weight: normal;
    font-size: 14.22px;
    color: #2F384F;
    padding: 4px 6px;
    span {
      width: 6px;
      height: 6px;
      background: #2F384F;
      border-radius: 1px;
      transform: rotate(45deg);
      margin-right: 5px;
    }
    &.status-pendint{

    }
    &.status-complete{
      background: #E7F6F0;
      color: #20764C;
      border-color: #D3EEE3;
      span{
        background: #20764C;
      }
    }
    &.status-return{
      background: #FFF8E0;
      color: #AE7700;
      border-color: #FFF3C7;
      span{
        background: #AE7700;
      }
    }
    &.status-deposit{
      background: #E8F6FC;
      color: #24729E;
      border-color: #D4EEF9;
      span{
        background: #24729E;
      }
    }
    &.status-denied{
      background: #FBE7E2;
      color: #A52007;
      border-color: #F8D3C9;
      span{
        background: #A52007;
      }
    }
  }

  .md-table-cell {
    height: 48px;
    position: relative;
    transition: .3s $md-transition-default-timing;
    font-size: 13px;
    line-height: 18px;

    &.md-numeric {
      text-align: right;
    }

    &:last-child .md-table-cell-container {
      padding-right: 24px;
    }
  }

  .md-table-cell-container {
    padding: 6px 32px 6px 24px;
  }
</style>
