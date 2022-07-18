<template>
  <div class="prose max-w-none rounded-md flex flex-col items-center justify-items-center mt-8 py-8 px-32 bg-gray-100">
    <div class="space-y-4">
      <div class="flex items-center">
        <input
          id="standard"
          v-model="selected"
          name="radio"
          type="radio"
          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
          value="Standard"
        >
        <label
          for="standard"
          class="ml-3 block text-sm font-medium text-gray-700"
        > Standard </label>
      </div>
      <div class="flex items-center">
        <input
          id="safe"
          v-model="selected"
          name="radio"
          type="radio"
          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
          value="Safe"
        >
        <label
          for="safe"
          class="ml-3 block text-sm font-medium text-gray-700"
        > Safe (+{{ safe }}{{ currency }}, 50%) </label>
      </div>
      <div class="flex items-center">
        <input
          id="supersafe"
          v-model="selected"
          name="radio"
          type="radio"
          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
          value="Super Safe"
        >
        <label
          for="supersafe"
          class="ml-3 block text-sm font-medium text-gray-700"
        > Super Safe (+{{ supersafe }}{{ currency }}, 75%) </label>
      </div>
    </div>
    <div class="mt-8 font-bold text-2xl text-gray-900">
      Your premium is: {{ premium }}{{ currency }}
    </div>
    <div class="mt-8 grid grid-cols-2 gap-4">
      <button
        id="back"
        class="py-2 px-8 border border-transparent shadow-sm text-md font-medium rounded-md text-black bg-white border-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100"
        @click="goBack"
      >
        Back
      </button>
      <button
        id="next"
        class="py-2 px-8 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
        @click="goNext"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Country {
  rate: number,
  currency: string
}

const countries: {
  'Hong Kong': Country,
  'United States': Country,
  'Australia': Country
} = {
  'Hong Kong': {
    rate: 1,
    currency: 'HKD',
  },
  'United States': {
    rate: 2,
    currency: 'USD',
  },
  'Australia': {
    rate: 3,
    currency: 'AUD',
  },
}

export default defineComponent({
  props: {
    name: {
      type: String,
      default: '',
    },
    age: {
      type: Number,
      default: 50,
    },
    country: {
      type: String,
      default: 'Hong Kong',
    },
    package: {
      type: String,
      default: 'Standard',
    },
  },
  data() {
    return {
      selected: this.package,
    }
  },
  computed: {
    premium: {
      get() {
        return this.age !== null ? this.age * 10 * countries[this.country].rate : 0
      },
    },
    currency: {
      get() {
        return countries[this.country].currency
      },
    },
    safe: {
      get() {
        return this.premium * 0.5
      },
    },
    supersafe: {
      get() {
        return this.premium * 0.75
      },
    },
  },
  methods: {
    goBack() {
      this.$router.push('/')
    },
    goNext() {
      if (this.age > 100)
        this.$router.push('/error')
      else {
        this.$emit('event', {
          currency: this.currency,
          premium: this.premium,
          package: this.selected,
        })
        this.$router.push('/summary')
      }
    },
  },
})
</script>

<style>
</style>
