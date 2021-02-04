import material from 'vue-material/material'
import MdCalendar from './MdCalendar'

export default Vue => {
  material(Vue)
  Vue.component(MdCalendar.name, MdCalendar)
}