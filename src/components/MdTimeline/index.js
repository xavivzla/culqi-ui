import material from 'vue-material/material'
import MdTimeline from './MdTimeline'
import MdTimelineItem from './MdTimelineItem.vue'
import MdTimelineBody from './MdTimelineBody.vue'
import MdTimelineHeaader from './MdTimelineHeader.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdTimeline.name, MdTimeline)
  Vue.component(MdTimelineItem.name, MdTimelineItem)
  Vue.component(MdTimelineBody.name, MdTimelineBody)
  Vue.component(MdTimelineHeaader.name, MdTimelineHeaader)
}