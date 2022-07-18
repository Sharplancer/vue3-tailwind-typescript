<template>
  <div class="prose max-w-none min-h-screen flex flex-col items-center justify-center">
    <div class="mt-8 px-32 py-16 rounded-md bg-gray-100 flex flex-col items-center justify-center">
      <h1>Hello There!</h1>
      <div>Let's buy some insurance. It is going to take only a few steps.</div>
      <button
        class="mt-8 py-2 px-16 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
        @click="start"
      >
        Start
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  methods: {
    start() {
      this.$router.push('/personal')
    },
  },
})
</script>
