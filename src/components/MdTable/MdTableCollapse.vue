<template>
  <tr>
    <td v-if="mdActive" colspan="100%">
      <div class="md-table-collapse">
        <div class="md-table-collapse__content">

          <div v-if="mdCollapseRows">
            <div class="md-table-collapse__row" v-for="(row, indexRow) in mdCollapseRows" :key="indexRow" >
              <div class="md-table-collapse__cell" v-for="(item, index) in row" :key="item + index">
                <div class="md-table-collapse-item">
                  <div class="md-table-collapse-item__title">
                    {{index}}
                  </div>
                  <div class="md-table-collapse-item__desc">
                    {{item}}
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="md-table-collapse__row" v-if="mdCollapseCodes">
            <div class="md-table-collapse__cell no-border" v-if="mdCollapseCodes.requestBody">
              <div class="md-table-collapse__code-title">Request</div>
              <div class="prism-wrapper">
                <highlight-code lang="json">
                  {{mdCollapseCodes.requestBody}}
                </highlight-code>
                <!-- <pre class="line-numbers"><code v-html="highlighter(JSON.stringify(mdCollapseCodes.requestBody, null, 4))"></code></pre> -->
              </div>
            </div>
            <div class="md-table-collapse__cell no-border" v-if="mdCollapseCodes.responseBody">
              <div class="md-table-collapse__code-title">Response</div>
              <div class="prism-wrapper">
                <highlight-code lang="json">
                  {{mdCollapseCodes.responseBody}}
                </highlight-code>
                <!-- <pre class="line-numbers"><code v-html="highlighter(JSON.stringify(mdCollapseCodes.requestBody, null, 4))"></code></pre> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <slot />
    </td>
  </tr>
</template>

<script>
  export default {
    name: 'MdTableCollapse',
    props: {
      mdActive: Boolean,
      mdCollapseRows: Array,
      mdCollapseCodes: Object,
      mdId: Number
    },
    inject: ['MdTable']
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-table-collapse{
    &__content{
      background: #F9F9FA;
      padding: 24px;
      border-top: solid 1px #E2E5E8;
      border-bottom: solid 1px #E2E5E8;
    }
    &__row{
      display: flex;
      margin-bottom: 12px;
      &:last-child{
        margin-bottom: 0;
      }
    }
    &__code-title{
      border-bottom: solid 1px #333333;
      background: #1F1F1F;
      border-radius: 4px 4px 0 0;
      
      font-family: Archivo;
      font-style: normal;
      font-weight: normal;
      font-size: 14.22px;
      line-height: 20px;
      color: #C2C2C2;
      padding: 8px;
    }
    &__cell{
      border-bottom: solid 1px #E2E5E8;
      flex: 1;
      margin-right: 24px;
      &.no-border{
        border: none;
      }
      &:last-child{
        margin-right: 0;
      }
      pre{
        margin-top: 0;
      }
    }
    &-item{
      &__title{
        font-family: Archivo;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        display: flex;
        align-items: center;
        color: #677487;
        margin-bottom: 10px;
      }
      &__desc{
        font-family: Archivo;
        font-style: normal;
        font-weight: normal;
        font-size: 14.22px;
        line-height: 20px;
        display: flex;
        align-items: center;
        color: #1F263E;
      }
    }
  }

  .prism-wrapper{
    padding: 20px 10px;
    height: auto;
    background: #1F1F1F;
    .hljs{
      background: #1F1F1F;
    }
    span{
      &.token.punctuation{

      }
    }
    .token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string{
      background: transparent;
    }
  }
</style>
