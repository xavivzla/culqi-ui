import material from 'vue-material/material'
import MdDrawerCulqi from './MdDrawerCulqi'

export default Vue => {
  material(Vue)
  Vue.component(MdDrawerCulqi.name, MdDrawerCulqi)
}
