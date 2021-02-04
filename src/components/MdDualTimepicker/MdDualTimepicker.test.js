import mountTemplate from 'test/utils/mountTemplate'
import MdDualTimepicker from './MdDualTimepicker.vue'

test('should render the dualTimepicker', async () => {
  const template = '<md-dual-timepicker>Lorem ipsum</md-dual-timepicker>'
  const wrapper = await mountTemplate(MdDualTimepicker, template)

  expect(wrapper.hasClass('md-dual-timepicker')).toBe(true)
})
