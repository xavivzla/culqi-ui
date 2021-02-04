<script>
  export default {
    name: 'MdTableCollapseGhost',
    props: {
      mdIndex: [String, Number],
      mdId: [String, Number],
      mdItem: [Array, Object],
      mdActive: Boolean,
      mdCollapseRows: Array,
      mdCollapseCodes: Object
    },
    render () {
      this.$slots.default[0].componentOptions.propsData.mdActive = this.mdActive
      this.$slots.default[0].componentOptions.propsData.mdCollapseRows = this.mdCollapseRows
      this.$slots.default[0].componentOptions.propsData.mdCollapseCodes = this.mdCollapseCodes
      this.$slots.default[0].componentOptions.propsData.mdId = this.mdId
      // this.$slots.default[0].componentOptions.propsData.mdItem = this.mdItem
      // this.$slots.default[0].componentOptions.propsData.mdCollapse = this.mdCollapse

      return this.$slots.default[0]
    }
  }
</script>
