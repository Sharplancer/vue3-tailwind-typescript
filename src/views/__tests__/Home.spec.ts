import { mount } from '@vue/test-utils'
import Home from '../../views/Home.vue'

describe('Home.vue', () => {
  it('Renders Home page', () => {
    const wrapper = mount(Home as any)
    expect(wrapper.text()).toMatch('Hello There!')
  })
  it('Start Button click', async () => {
    const mockRoute = {
      params: {
        id: 1,
      },
    }
    const mockRouter = {
      push: jest.fn(),
    }
  
    const wrapper = mount(Home as any, {
      props: {
        isAuthenticated: true,
      },
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    })
  
    await wrapper.find('button').trigger('click')
  
    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith('/personal')
  })
})