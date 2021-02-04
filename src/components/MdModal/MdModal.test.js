import mountTemplate from 'test/utils/mountTemplate'
import MdModal from './MdModal.vue'

test('should render the modal', async () => {
  const template = '<md-modal>Lorem ipsum</md-modal>'
  const wrapper = await mountTemplate(MdModal, template)

  expect(wrapper.hasClass('md-modal')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-modal md-theme="alt">Lorem ipsum</md-modal>'
  const wrapper = await mountTemplate(MdModal, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})