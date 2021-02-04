import mountTemplate from 'test/utils/mountTemplate'
import MdFilterCulqi from './MdFilterCulqi.vue'

test('should render the filterculqi', async () => {
  const template = '<md-filter-culqi>Lorem ipsum</md-filter-culqi>'
  const wrapper = await mountTemplate(MdFilterCulqi, template)

  expect(wrapper.hasClass('md-filter-culqi')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-filter-culqi md-theme="alt">Lorem ipsum</md-filter-culqi>'
  const wrapper = await mountTemplate(MdFilterCulqi, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
