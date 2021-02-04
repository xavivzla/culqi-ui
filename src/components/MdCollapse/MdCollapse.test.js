import mountTemplate from 'test/utils/mountTemplate'
import MdCollapse from './MdCollapse.vue'

test('should render the collapse', async () => {
  const template = '<md-collapse>Lorem ipsum</md-collapse>'
  const wrapper = await mountTemplate(MdCollapse, template)

  expect(wrapper.hasClass('md-collapse')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-collapse md-theme="alt">Lorem ipsum</md-collapse>'
  const wrapper = await mountTemplate(MdCollapse, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})