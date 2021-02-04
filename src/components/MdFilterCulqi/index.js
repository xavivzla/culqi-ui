import material from 'vue-material/material'
import MdFilterCulqi from './MdFilterCulqi'

export default Vue => {
  material(Vue)
  Vue.component(MdFilterCulqi.name, MdFilterCulqi)
}
