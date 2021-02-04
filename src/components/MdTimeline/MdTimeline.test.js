import mountTemplate from 'test/utils/mountTemplate'
import MdTimeline from './MdTimeline.vue'

test('should render the timeline', async () => {
  const template = '<md-timeline>Lorem ipsum</md-timeline>'
  const wrapper = await mountTemplate(MdTimeline, template)

  expect(wrapper.hasClass('md-timeline')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-timeline md-theme="alt">Lorem ipsum</md-timeline>'
  const wrapper = await mountTemplate(MdTimeline, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})