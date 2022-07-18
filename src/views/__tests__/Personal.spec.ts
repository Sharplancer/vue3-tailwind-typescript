import { mount } from '@vue/test-utils'
import Personal from '../Personal.vue'

describe('Personal.vue', () => {
  it('Renders Personal page', () => {
    const wrapper = mount(Personal as any)
    expect(wrapper.text()).toMatch('Tell us about yourself')
  })
})