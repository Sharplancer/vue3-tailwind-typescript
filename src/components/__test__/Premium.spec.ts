import { mount } from '@vue/test-utils'
import Premium from '../Premium.vue'

describe('Premium.vue', () => {
  it('Renders Premium page when name: john doe age: 20', () => {
    const wrapper = mount(Premium as any, {
      props: {
        age: 20,
      },
    })
    expect(wrapper.text()).toContain('200HKD')
  })
  it('Age back Button click', async () => {
    
    const mockRoute = {
      params: {
        id: 1,
      },
    }
    const mockRouter = {
      push: jest.fn(),
    }
  
    const wrapper = mount(Premium as any, {
      props: {
        age: 110,
      },
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    })

    await wrapper.find('button[id="back"]').trigger('click')
  
    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith('/')
  })
  it('Age over 100 next Button click', async () => {
    
    const mockRoute = {
      params: {
        id: 1,
      },
    }
    const mockRouter = {
      push: jest.fn(),
    }
  
    const wrapper = mount(Premium as any, {
      props: {
        age: 110,
      },
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    })

    await wrapper.find('button[id="next"]').trigger('click')
  
    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith('/error')
  })
  it('Age Under 100 next Button click', async () => {
    
    const mockRoute = {
      params: {
        id: 1,
      },
    }
    const mockRouter = {
      push: jest.fn(),
    }
  
    const wrapper = mount(Premium as any, {
      props: {
        age: 90,
      },
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    })

    await wrapper.find('button[id="next"]').trigger('click')
  
    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith('/summary')
  })
})