import { reactive } from 'vue'

export const globalState = reactive({
  name: '',
  age: 50,
  premium: 0,
  package: 'Standard',
  country: 'Hong Kong',
  currency: 'HKD',
})
