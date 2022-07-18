import { mount } from '@vue/test-utils'
import Summary from '../Summary.vue'

describe('Summary.vue', () => {
  it('Renders Summary page when name: john doe age: 20 country: United States', () => {
    const wrapper = mount(Summary as any, {
      setup() {
        return {
            name: 'John Doe',
            age: 20,
            country: 'United States',
            package: 'Standard',
            premium: '400',
            currency: 'USD',
        }
        },
    })
    expect(wrapper.text()).toMatch('John Doe')
    expect(wrapper.text()).toMatch('400USD')
  })
  it('Back Button click', async () => {
    
    const mockRoute = {
      params: {
        id: 1,
      },
    }
    const mockRouter = {
      push: jest.fn(),
    }
  
    const wrapper = mount(Summary as any, {
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
    expect(mockRouter.push).toHaveBeenCalledWith('/personal')
  })
  it('Next Button click', async () => {
    
    const mockRoute = {
      params: {
        id: 1,
      },
    }
    const mockRouter = {
      push: jest.fn(),
    }
  
    const wrapper = mount(Summary as any, {
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
    expect(mockRouter.push).toHaveBeenCalledWith('/')
  })
})