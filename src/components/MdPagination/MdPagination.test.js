import mountTemplate from 'test/utils/mountTemplate'
import MdPagination from './MdPagination.vue'

test('should render the pagination', async () => {
  const template = '<md-pagination>Lorem ipsum</md-pagination>'
  const wrapper = await mountTemplate(MdPagination, template)

  expect(wrapper.hasClass('md-pagination')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-pagination md-theme="alt">Lorem ipsum</md-pagination>'
  const wrapper = await mountTemplate(MdPagination, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})