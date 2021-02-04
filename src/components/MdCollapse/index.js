import material from 'vue-material/material'
import MdCollapse from './MdCollapse'

export default Vue => {
  material(Vue)
  Vue.component(MdCollapse.name, MdCollapse)
}