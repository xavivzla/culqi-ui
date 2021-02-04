import mountTemplate from 'test/utils/mountTemplate'
import MdCalendar from './MdCalendar.vue'

test('should render the calendar', async () => {
  const template = '<md-calendar>Lorem ipsum</md-calendar>'
  const wrapper = await mountTemplate(MdCalendar, template)

  expect(wrapper.hasClass('md-calendar')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-calendar md-theme="alt">Lorem ipsum</md-calendar>'
  const wrapper = await mountTemplate(MdCalendar, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})