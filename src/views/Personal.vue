<template>
  <div class="prose max-w-none min-h-screen flex flex-col items-center justify-center  ">
    <h1>Tell us about yourself</h1>
    <div class="grid grid-rows-3 gap-2">
      <div class="col-span-2">
        <label
          for="name"
          class="block text-sm font-medium text-gray-700"
        >Name</label>
        <input
          id="name"
          v-model="name"
          type="text"
          name="name"
          autocomplete="given-name"
          placeholder="Your name"
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          required
        >
      </div>
      <div class="col-span-2">
        <label
          for="age"
          class="block text-sm font-medium text-gray-700"
        >Age</label>
        <input
          id="age"
          v-model="age"
          type="number"
          name="age"
          autocomplete="age"
          placeholder="Your age"
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          required
        >
      </div>
      <div class="col-span-2">
        <label
          for="country"
          class="block text-sm font-medium text-gray-700"
        >Where do you live</label>
        <select
          id="country"
          v-model="country"
          name="country"
          autocomplete="country-name"
          class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option>Hong Kong</option>
          <option>United States</option>
          <option>Australia</option>
        </select>
      </div>
    </div>
    <Premium
      :age="age"
      :country="country"
      :package="package"
      @event="updateData"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue'
import { globalState } from '../store'

import Premium from '../components/Premium.vue'

export default defineComponent({
  components: {
    Premium,
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
  data() {
    return {
    }
  },
  methods: {
    updateData(data: any) {
      this.currency = data.currency
      this.premium = data.premium
      this.package = data.package
    },
  },
})
</script>
