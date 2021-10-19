import { mount } from '@vue/test-utils'
import TestComponent from './TestComponent.vue'

describe('TestComponent testing', () => {
  test('Test content', () => {
    const wrapper = mount(TestComponent, {
      propsData: {
        message: 'Hello world!'
      }
    })

    expect(wrapper.text()).toEqual('The message is: Hello world!')
  })
})
