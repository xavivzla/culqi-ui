import material from 'vue-material/material'
import MdPagination from './MdPagination'

export default Vue => {
  material(Vue)
  Vue.component(MdPagination.name, MdPagination)
}