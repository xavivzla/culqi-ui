import mountTemplate from 'test/utils/mountTemplate'
import mockConsole from 'test/utils/mockConsole'
import MdAvatar from '../MdAvatar.vue'
import MdAvatarMedia from './MdAvatarMedia.vue'
import MdAvatarMediaActions from './MdAvatarMediaActions.vue'
import MdAvatarMediaCover from './MdAvatarMediaCover.vue'

const avatarComponents = {
  components: {
    MdAvatarMedia,
    MdAvatarMediaActions,
    MdAvatarMediaCover
  }
}

test('should render the avatar media with medium size', async () => {
  const template = `
    <md-avatar>
      <md-avatar-media md-medium>
      </md-avatar-media>
    </md-avatar>
  `
  const wrapper = await mountTemplate(MdAvatar, template, avatarComponents)
  const media = wrapper.find(MdAvatarMedia)[0]

  expect(media.hasClass('md-avatar-media')).toBe(true)
  expect(media.hasClass('md-medium')).toBe(true)
})

test('should render the avatar media with big size', async () => {
  const template = `
    <md-avatar>
      <md-avatar-media md-big>
      </md-avatar-media>
    </md-avatar>
  `
  const wrapper = await mountTemplate(MdAvatar, template, avatarComponents)
  const media = wrapper.find(MdAvatarMedia)[0]

  expect(media.hasClass('md-avatar-media')).toBe(true)
  expect(media.hasClass('md-big')).toBe(true)
})

test('should render the avatar media with correct ratio', async () => {
  const template = '<md-avatar-media md-ratio="16:9"></md-avatar-media>'
  const wrapper = await mountTemplate(MdAvatarMedia, template, avatarComponents)

  expect(wrapper.hasClass('md-ratio-16-9')).toBe(true)
})

test('should render the avatar media with correct ratio', async () => {
  const template = '<md-avatar-media md-ratio="16-9"></md-avatar-media>'
  const wrapper = await mountTemplate(MdAvatarMedia, template, avatarComponents)

  expect(wrapper.hasClass('md-ratio-16-9')).toBe(true)
})

test('should render the avatar media with correct ratio', async () => {
  const template = '<md-avatar-media md-ratio="16/9"></md-avatar-media>'
  const wrapper = await mountTemplate(MdAvatarMedia, template, avatarComponents)

  expect(wrapper.hasClass('md-ratio-16-9')).toBe(true)
})

test('should render the avatar media with correct ratio', async () => {
  const template = '<md-avatar-media md-ratio="4:3"></md-avatar-media>'
  const wrapper = await mountTemplate(MdAvatarMedia, template, avatarComponents)

  expect(wrapper.hasClass('md-ratio-4-3')).toBe(true)
})

test('should render the avatar media with correct ratio', async () => {
  const template = '<md-avatar-media md-ratio="4-3"></md-avatar-media>'
  const wrapper = await mountTemplate(MdAvatarMedia, template, avatarComponents)

  expect(wrapper.hasClass('md-ratio-4-3')).toBe(true)
})

test('should render the avatar media with correct ratio', async () => {
  const template = '<md-avatar-media md-ratio="4/3"></md-avatar-media>'
  const wrapper = await mountTemplate(MdAvatarMedia, template, avatarComponents)

  expect(wrapper.hasClass('md-ratio-4-3')).toBe(true)
})

test('should render the avatar media with correct ratio', async () => {
  const template = '<md-avatar-media md-ratio="1:1"></md-avatar-media>'
  const wrapper = await mountTemplate(MdAvatarMedia, template, avatarComponents)

  expect(wrapper.hasClass('md-ratio-1-1')).toBe(true)
})

test('should render the avatar media with correct ratio', async () => {
  const template = '<md-avatar-media md-ratio="1-1"></md-avatar-media>'
  const wrapper = await mountTemplate(MdAvatarMedia, template, avatarComponents)

  expect(wrapper.hasClass('md-ratio-1-1')).toBe(true)
})

test('should render the avatar media with correct ratio', async () => {
  const template = '<md-avatar-media md-ratio="1/1"></md-avatar-media>'
  const wrapper = await mountTemplate(MdAvatarMedia, template, avatarComponents)

  expect(wrapper.hasClass('md-ratio-1-1')).toBe(true)
})

test('should fail with an unsupported ratio value', async () => {
  const template = `
    <md-avatar>
      <md-avatar-media md-ratio="9/16">
      </md-avatar-media>
    </md-avatar>
  `
  const mock = mockConsole()

  await mountTemplate(MdAvatar, template, avatarComponents)

  expect(console.error).toBeCalled()

  mock()
})

test('should render the avatar media actions', async () => {
  const template = `
    <md-avatar>
      <md-avatar-media-actions></md-avatar-media-actions>
    </md-avatar>
  `
  const wrapper = await mountTemplate(MdAvatar, template, avatarComponents)
  const actions = wrapper.find(MdAvatarMediaActions)[0]

  expect(actions.hasClass('md-avatar-media-actions')).toBe(true)
})

test('should render the avatar media cover', async () => {
  const template = `
    <md-avatar>
      <md-avatar-media-cover></md-avatar-media-cover>
    </md-avatar>
  `
  const wrapper = await mountTemplate(MdAvatar, template, avatarComponents)
  const cover = wrapper.find(MdAvatarMediaCover)[0]
  const backdrop = wrapper.find('.md-avatar-backdrop')[0]

  expect(cover.hasClass('md-avatar-media-cover')).toBe(true)
})

test('should render the avatar media cover with text scrim', async () => {
  const template = `
    <md-avatar>
      <md-avatar-media-cover md-text-scrim></md-avatar-media-cover>
    </md-avatar>
  `
  const wrapper = await mountTemplate(MdAvatar, template, avatarComponents)
  const cover = wrapper.find(MdAvatarMediaCover)[0]
  const backdrop = wrapper.find('.md-avatar-backdrop')[0]

  expect(cover.hasClass('md-avatar-media-cover')).toBe(true)
  expect(cover.hasClass('md-text-scrim')).toBe(true)
  expect(Boolean(backdrop)).toBe(true)
})

test('should render the avatar media cover with solid background', async () => {
  const template = `
    <md-avatar>
      <md-avatar-media-cover md-solid></md-avatar-media-cover>
    </md-avatar>
  `
  const wrapper = await mountTemplate(MdAvatar, template, avatarComponents)
  const cover = wrapper.find(MdAvatarMediaCover)[0]
  const backdrop = wrapper.find('.md-avatar-backdrop')[0]

  expect(cover.hasClass('md-avatar-media-cover')).toBe(true)
  expect(cover.hasClass('md-solid')).toBe(true)
  expect(Boolean(backdrop)).toBe(false)
})
