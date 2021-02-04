<script>
  export default {
    name: 'MdTableRowGhost',
    props: {
      mdIndex: [String, Number],
      mdId: [String, Number],
      mdItem: [Array, Object],
      mdCollapse: Boolean,
      mdCollapseData: Object
    },
    render () {
      this.$slots.default[0].componentOptions.propsData.mdIndex = this.mdIndex
      this.$slots.default[0].componentOptions.propsData.mdId = this.mdId
      this.$slots.default[0].componentOptions.propsData.mdItem = this.mdItem
      this.$slots.default[0].componentOptions.propsData.mdCollapse = this.mdCollapse
      this.$slots.default[0].componentOptions.propsData.mdCollapseData = this.mdCollapseData

      return this.$slots.default[0]
    }
  }
</script>
