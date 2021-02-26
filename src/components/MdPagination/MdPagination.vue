<template>
  <div class="md-pagination">
    <div class="md-pagination-content-items">
      <template v-if="mdPageOptions !== false">
        <span class="md-pagination-label">{{ mdLabel }}</span>

        <md-field>
          <md-select
            v-model="currentPageSize"
            md-dense
            md-class="md-pagination-select"
          >
            <md-option
              v-for="amount in mdPageOptions"
              :key="amount"
              :value="amount"
              >{{ amount }}</md-option
            >
          </md-select>
        </md-field>
      </template>
    </div>

    <div class="md-pagination-content-nums">
      <md-button
        class="md-icon-button md-pagination-previous"
        @click="goToPrevious()"
        :disabled="mdPage === 1"
      >
        <md-icon>keyboard_arrow_left</md-icon>
      </md-button>
      <md-button
        v-for="item in generatePaginated"
        :key="item"
        class="md-custom-button-pagination"
        :class="mdPage === item ? 'active' : ''"
        @click="goTo(item)"
      >
        {{ item }}
      </md-button>
      <md-button
        class="md-icon-button md-pagination-next"
        @click="goToNext()"
        :disabled="mdPage === mdTotalPage"
      >
        <md-icon>keyboard_arrow_right</md-icon>
      </md-button>
    </div>
  </div>
</template>

<script>
import MdComponent from "core/MdComponent";

export default new MdComponent({
  name: "MdPagination",
  props: {
    mdPageSize: {
      type: [String, Number],
      default: 10,
    },
    mdPageOptions: {
      type: Array,
      default: () => [10, 25, 50, 100],
    },
    mdPage: {
      type: Number,
      default: 1,
    },
    mdTotalPage: {
      type: Number,
      default: 0,
    },
    mdTotal: {
      type: [String, Number],
      default: "Many",
    },
    mdLabel: {
      type: String,
      default: "Rows per page:",
    },
    mdSeparator: {
      type: String,
      default: "of",
    },
  },
  data: () => ({
    currentPageSize: 0,
    currentInitial: 1,
    setPerPage: false,
  }),
  computed: {
    generatePaginated() {
      let startPage = 1;
      let endPage;
      let maxPages = 6;
      // total pages more than max so calculate start and end pages
      if (this.mdTotalPage > 6) {
        let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (this.mdPage <= maxPagesBeforeCurrentPage) {
          // current page near the start
          startPage = 1;
          endPage = maxPages;
        } else if (this.mdPage + maxPagesAfterCurrentPage >= this.mdTotalPage) {
          // current page near the end
          startPage = this.mdTotalPage - maxPages + 1;
          endPage = this.mdTotalPage;
        } else {
          // current page somewhere in the middle
          startPage = this.mdPage - maxPagesBeforeCurrentPage;
          endPage = this.mdPage + maxPagesAfterCurrentPage;
        }

        return Array.from(Array(endPage + 1 - startPage).keys()).map(
          (i) => startPage + i
        );
      } else {
        return this.mdTotalPage;
      }
    },
    currentItemCount() {
      return (this.mdPage - 1) * this.mdPageSize + 1;
    },
    currentPageCount() {
      return this.mdPage * this.mdPageSize;
    },
  },
  watch: {
    mdPage: {
      inmediate: true,
      handler(page) {
        if (this.mdTotalPage > 6) {
          if (this.mdPage > 5) {
            this.currentInitial = this.mdPage - 1;
          }
        }
      },
    },
    currentPageSize: function (newValue) {
      if (!this.setPerPage) {
        this.currentPageSize = newValue;
        this.setPerPage = true;
      } else {
        this.currentPageSize = newValue;
        this.setPageSize();
      }
    },
    mdPageSize: {
      // immediate: true,
      handler(pageSize) {
        this.currentPageSize = this.pageSize;
      },
    },
  },
  methods: {
    range(start, end) {
      const ans = [];
      for (let i = start; i <= end; i++) {
        ans.push(i);
      }
      return ans;
    },
    setPageSize() {
      this.$emit("update:mdPageSize", this.currentPageSize);
    },
    goToPrevious() {
      this.$emit("update:mdPage", this.mdPage - 1);
    },
    goToNext() {
      this.$emit("update:mdPage", this.mdPage + 1);
    },
    goTo(data) {
      this.$emit("update:mdPage", data);
    },
  },
  created() {
    this.currentPageSize = this.mdPageSize;
  },
});
</script>

<style lang="scss">
@import "~components/MdAnimation/variables";

.md-pagination {
  height: 56px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid;
  font-size: 12px;
  padding: 7px 16px;
  &-label {
    font-family: "Archivo", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #3e4b61;
  }

  &-content-items,
  &-content-nums {
    display: flex;
    align-items: center;
  }

  .md-pagination-previous,
  .md-pagination-next {
    // margin-right: 2px;
    // margin-left: 18px;
    min-width: 24px;
    min-height: 24px;
    width: 24px;
    height: 24px;
    .md-icon {
      color: #3e4b61;
    }
  }

  .md-field {
    width: 52px;
    min-width: 36px;
    margin: 0 8px;
    border: 1px solid #eaecee;
    box-sizing: border-box;
    border-radius: 4px;
    height: 24px;
    padding: 0px 8px;
    padding-right: 0;
    min-height: 24px;
    &-content {
      &:after,
      &:before {
        display: none;
      }
    }

    input {
      height: auto;
      font-family: "Archivo", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 12px !important;
    }

    .md-select-value {
      font-size: 12px;
    }
  }
}
.md-pagination {
  .md-menu.md-select {
    .md-icon {
      min-width: 7px;
      width: 7px;
      margin-right: 8px;
    }
  }
}
.md-menu-content.md-pagination-select {
  max-width: 82px;
  min-width: 56px;
  margin-top: 5px;
}
</style>
