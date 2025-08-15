<template>
  <div class="top-ar" @click="scrollToTop">
    <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 14.0032L5 2.00317M5 2.00317L9.00063 6.00317M5 2.00317L0.999365 6.00317"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>
