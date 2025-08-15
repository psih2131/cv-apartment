<template>
    <div class="apartments-filtr__rooms-row rooms">

        <!-- <div class="rooms__element rooms__element--hide" @click="roomIndex == 4">4к</div> -->
        <template v-for="(item,index) in roomIndex" :key="index">
            <div class="rooms__element" 
            :class="{'rooms__element--activ': index + 1 == activIndex}" 
            @click="changeCurrentIndex(index)">{{ item }}к</div>
        </template>
        
    </div>
</template>


<script setup lang="ts">

//IMPORT

import { ref, watch  } from 'vue';

import { useCounterStore } from '@/stores/counter'


//DATA

const store = useCounterStore()

const roomIndex = ref<number[]>([1, 2, 3, 4])

const activIndex = ref<number | null>(null)

const filterValues = ref<{
  minRooms: number | null,
  maxRooms: number | null

}>({
  minRooms: 0,
  maxRooms: 10
});


//EMITS
const emit = defineEmits<{
  (e: 'roomsFiltrChanged', payload: any): void
}>()


//METHODS
function changeCurrentIndex(data: number) {
    activIndex.value = data + 1
    filterValues.value.minRooms = activIndex.value
    filterValues.value.maxRooms = activIndex.value
    emit('roomsFiltrChanged', filterValues.value) 
}

//HOOKS
watch(
  () => store.clearFiltrStatus,
  (newValue) => {
    if (newValue == true) {
      activIndex.value = null
      filterValues.value.minRooms = 0
      filterValues.value.maxRooms = 10
      console.log('Фильтр очищен')
    }
  }
)

</script>