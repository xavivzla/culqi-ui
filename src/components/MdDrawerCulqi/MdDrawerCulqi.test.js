import mountTemplate from 'test/utils/mountTemplate'
import MdDrawerCulqi from './MdDrawerCulqi.vue'

test('should render the drawerculqi', async () => {
  const template = '<md-drawer-culqi>Lorem ipsum</md-drawer-culqi>'
  const wrapper = await mountTemplate(MdDrawerCulqi, template)

  expect(wrapper.hasClass('md-drawer-culqi')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-drawer-culqi md-theme="alt">Lorem ipsum</md-drawer-culqi>'
  const wrapper = await mountTemplate(MdDrawerCulqi, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
