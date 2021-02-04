import material from 'vue-material/material'
import MdAvatar from './MdAvatar'
// agregado
import MdAvatarMedia from './MdAvatarMedia/MdAvatarMedia'
import MdAvatarMediaActions from './MdAvatarMedia/MdAvatarMediaActions'
import MdAvatarMediaCover from './MdAvatarMedia/MdAvatarMediaCover'

export default Vue => {
  material(Vue)
  Vue.component(MdAvatar.name, MdAvatar)
  Vue.component(MdAvatarMedia.name, MdAvatarMedia)
  Vue.component(MdAvatarMediaActions.name, MdAvatarMediaActions)
  Vue.component(MdAvatarMediaCover.name, MdAvatarMediaCover)
}
