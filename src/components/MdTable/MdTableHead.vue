<template>
  <th class="md-table-head" :id="id" :class="headClasses" :style="headStyles" @click="changeSort">
    <div class="md-table-head-container" v-if="$slots.default">
      <div class="md-table-head-label">
        <slot />
      </div>
    </div>

    <md-ripple class="md-table-head-container md-display-none" :md-disabled="!hasSort" v-else>
      <div class="md-table-head-label">

        {{ label }}

        <md-upward-icon class="md-table-sortable-icon" v-if="hasSort">arrow_upward</md-upward-icon>
        <md-tooltip v-if="tooltip">{{ tooltip }}</md-tooltip>
        <md-icon v-if="hasinternalIcon">{{icon}}</md-icon>
        <md-icon v-if="!hasinternalIcon" :md-src="icon" />
      </div>
    </md-ripple>
  </th>
</template>

<script>
  import MdUpwardIcon from 'core/icons/MdUpwardIcon'
  import MdResizeObserver from 'core/utils/MdResizeObserver'

  export default {
    name: 'MdTableHead',
    components: {
      MdUpwardIcon
    },
    props: {
      mdNumeric: Boolean,
      numeric: Boolean,
      id: [String, Number],
      label: String,
      icon: String,
      tooltip: String,
      sortBy: String,
      modeMobile: Boolean
    },
    inject: ['MdTable'],
    data: () => ({
      width: null,
      windowResizeObserver: null
    }),
    computed: {
      hasinternalIcon () {
        const valid = new RegExp(/^[a-zA-Z_]+$/)

        return valid.test(this.icon)
      },
      hasSort () {
        return this.MdTable.sort && this.sortBy
      },
      isSorted () {
        if (this.MdTable.sort) {
          return this.MdTable.sort === this.sortBy
        }
      },
      isDescSorted () {
        return this.isSorted && this.MdTable.sortOrder === 'desc'
      },
      isAscSorted () {
        return this.isSorted && this.MdTable.sortOrder === 'asc'
      },
      headStyles () {
        return {
          width: this.width + 'px'
        }
      },
      headClasses () {
        return {
          'md-numeric': this.numeric || this.mdNumeric,
          'md-sortable': this.hasSort,
          'md-sorted': this.isSorted,
          'md-sorted-desc': this.isDescSorted
        }
      }
    },
    methods: {
      changeSort () {
        if (this.hasSort) {
          if (this.isAscSorted) {
            this.MdTable.sortOrder = 'desc'
          } else {
            this.MdTable.sortOrder = 'asc'
          }

          this.MdTable.sort = this.sortBy
          this.MdTable.emitEvent('md-sorted', this.MdTable.sort)
          this.MdTable.emitEvent('update:mdSort', this.MdTable.sort)
          this.MdTable.emitEvent('update:mdSortOrder', this.MdTable.sortOrder)
          this.MdTable.sortTable()
        }
      },
      getChildNodesBySelector (el, selector) {
        return Array.from(el.childNodes).filter(({ classList }) => classList && classList.contains(selector))
      },
      getNodeIndex (nodes, el) {
        return [].indexOf.call(nodes, el)
      },
      setWidth () {
        if (this.MdTable.fixedHeader) {
          const cellSelector = 'md-table-cell'
          const thEls = this.getChildNodesBySelector(this.$el.parentNode, 'md-table-head')
          const tdEls = this.MdTable.contentEl.querySelectorAll('tr:first-child .' + cellSelector)
          const nodeIndex = this.getNodeIndex(thEls, this.$el)

          this.width = tdEls[nodeIndex].offsetWidth
        }
      }
    },
    updated () {
      this.$nextTick().then(this.setWidth)
    },
    mounted () {
      this.$nextTick().then(this.setWidth)

      if (this.MdTable.fixedHeader) {
        this.windowResizeObserver = new MdResizeObserver(window, this.setWidth)
      }
    },
    beforeDestroy () {
      if (this.windowResizeObserver) {
        this.windowResizeObserver.destroy()
      }
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-display-none {
    @media screen and (max-width: 768px){
      display: none !important;
    }
  }
  .md-table-head {
    padding: 0;
    position: relative;
    font-size: 12px;
    line-height: 16px;
    text-align: left;
    background: #F9F9FA;

    &:last-child:not(:first-child) .md-table-head-label {
      padding-right: 24px;
    }

    &.md-numeric {
      text-align: right;
    }

    &.md-sortable:first-of-type,
    &.md-table-cell-selection + .md-sortable {
      .md-table-sortable-icon {
        right: 8px;
        left: auto;
      }
    }

    .md-icon {
      $size: 16px;
      width: $size;
      height: $size;
      font-size: $size;

      &:not(.md-sortable-icon) {
        margin: 0 4px;
      }

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .md-sortable {
    cursor: pointer;

    &:hover,
    &.md-sorted {
      .md-table-sortable-icon {
        opacity: 1;
      }
    }

    &.md-sorted-desc {
      .md-table-sortable-icon {
        transform: translateY(-50%) rotate(180deg);
      }
    }
  }

  .md-table-head-container {
    height: 40px;
    padding: 0 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .md-table-head-label {
    height: 40px;
    padding-right: 32px;
    // padding-left: 24px;
    display: inline-block;
    position: relative;
    overflow: hidden;
    line-height: 40px;

    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: 'Archivo', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    color: #677487;
  }

  .md-table-sortable-icon {
    position: absolute;
    top: 50%;
    right: 0;
    transition: .3s $md-transition-default-timing;
    transform: translateY(-50%);
    opacity: 0;
    color: rgba(#000, .38);
    svg{
      fill: #677487 !important;
    }
  }
</style>
