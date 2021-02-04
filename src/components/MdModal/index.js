import material from 'vue-material/material'
import MdModal from './MdModal'
import MdModalHeader from './MdModalHeader.vue'
import MdModalBody from './MdModalBody.vue'
import MdModalFooter from './MdModalFooter.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdModal.name, MdModal)
  Vue.component(MdModalHeader.name, MdModalHeader)
  Vue.component(MdModalBody.name, MdModalBody)
  Vue.component(MdModalFooter.name, MdModalFooter)
}