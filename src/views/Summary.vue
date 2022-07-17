<template>
  <div class="prose max-w-none min-h-screen flex flex-col items-center justify-center">
    <div class="px-32 py-16 rounded-md bg-gray-100 flex flex-col items-center justify-center">
      <h1>Summary</h1>
      <div class="space-y-4 flex flex-col items-center">
        <div class="flex items-center">
          <label
            for="name"
            class="ml-3 block text-md font-medium text-gray-700"
          > Name: {{ name }} </label>
        </div>
        <div class="flex items-center">
          <label
            for="age"
            class="ml-3 block text-md font-medium text-gray-700"
          > Age: {{ age }} </label>
        </div>
        <div class="flex items-center">
          <label
            for="country"
            class="ml-3 block text-md font-medium text-gray-700"
          > Where do you live: {{ country }} </label>
        </div>
        <div class="flex items-center">
          <label
            for="package"
            class="ml-3 block text-md font-medium text-gray-700"
          > Package: {{ package }} </label>
        </div>
        <div class="flex items-center">
          <label
            for="package"
            class="ml-3 block text-md font-medium text-gray-700"
          > Premium: {{ premium }}{{ currency }} </label>
        </div>
      </div>
      <div class="mt-16 grid grid-cols-2 gap-4">
        <button
          class="py-2 px-8 border border-transparent shadow-sm text-md font-medium rounded-md text-black bg-white border-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100"
          @click="goBack"
        >
          Back
        </button>
        <button
          class="py-2 px-8 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          @click="goNext"
        >
          Buy
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue'
import { globalState } from '../store'

export default defineComponent({
  components: {
  },
  setup() {
    return {
      name: toRef(globalState, 'name'),
      age: toRef(globalState, 'age'),
      country: toRef(globalState, 'country'),
      package: toRef(globalState, 'package'),
      premium: toRef(globalState, 'premium'),
      currency: toRef(globalState, 'currency'),
    }
  },
  methods: {
    goBack() {
      this.$router.push('/personal')
    },
    goNext() {
      this.name = ''
      this.age = 50
      this.country = 'Hong Kong'
      this.package = 'Standard'
      this.premium = 0
      this.currency = 'HKD'
      this.$router.push('/')
    },
  },
})
</script>
