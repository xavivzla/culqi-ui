import material from 'vue-material/material'
import MdDualTimepicker from './MdDualTimepicker'

export default Vue => {
  material(Vue)
  Vue.component(MdDualTimepicker.name, MdDualTimepicker)
}
