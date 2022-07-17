<template>
  <div class="prose max-w-none min-h-screen flex flex-col items-center">
    <div class="mt-8 px-32 py-16 rounded-md bg-gray-100 flex flex-col items-center justify-center">
      <h1>Ooops</h1>
      <p class="text-center">
        Your age is over our accepted limit.<br>We are sorry but we canot insure you now
      </p>
      <router-link to="/">
        <button class="mt-8 py-2 px-32 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
          Ok :(
        </button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
})
</script>

<style scoped>
h1 {
  margin-bottom: 0;
}
</style>
