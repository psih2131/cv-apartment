<template>
  <div class="app-container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <topAr v-if="showTopAr" />

    <preloader v-if="store.preloaderStatus" />
  </div>
</template>

<script setup lang="ts">

//IMPORT

import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount } from 'vue'

import preloader from '@/components/preloader.vue'

import topAr from '@/components/top-ar.vue'



//DATA

const store = useCounterStore()

const showTopAr = ref<boolean>(false)


//METHODS
const handleScroll = (event?: Event) => {
  showTopAr.value = window.scrollY > 50
}


//HOOKS
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() 
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>