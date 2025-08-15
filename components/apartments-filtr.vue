<template>
    <div class="apartment-sec__aside-filtr apartments-filtr">
    
        <roomsFiltrElement @roomsFiltrChanged="onRoomsUpdate"/>

        <rangeFiltrElement :title="'Стоимость квартиры, ₽'" :minRange="minPrice" :maxRange="maxPrice" @changeValue="onRangeUpdatePrice"/>

        <rangeFiltrElement :title="'Площадь, м²'" :minRange="minSize" :maxRange="maxSize" @changeValue="onRangeUpdateSize"/>

        <div class="apartments-filtr__clear-btn" v-if="filtrLoaded == true" @click="clearFiltr()">
            Сбросить параметры

            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.99996 5.22223L1.37727 7.84492C1.12213 8.10007 0.641687 8.0333 0.304183 7.6958C-0.0333213 7.35829 -0.100086 6.87786 0.15506 6.62271L2.77775 4.00002L0.155017 1.37729C-0.100129 1.12214 -0.0333644 0.641701 0.30414 0.304197C0.641644 -0.0333071 1.12208 -0.100072 1.37723 0.155074L3.99996 2.77781L6.62282 0.154956C6.87796 -0.10019 7.3584 -0.0334256 7.6959 0.304079C8.03341 0.641583 8.10017 1.12202 7.84503 1.37717L5.22217 4.00002L7.84498 6.62283C8.10013 6.87797 8.03336 7.35841 7.69586 7.69592C7.35836 8.03342 6.87792 8.10019 6.62277 7.84504L3.99996 5.22223Z" fill="#FF0000"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.99996 5.22223L1.37727 7.84492C1.12213 8.10007 0.641687 8.0333 0.304183 7.6958C-0.0333213 7.35829 -0.100086 6.87786 0.15506 6.62271L2.77775 4.00002L0.155017 1.37729C-0.100129 1.12214 -0.0333644 0.641701 0.30414 0.304197C0.641644 -0.0333071 1.12208 -0.100072 1.37723 0.155074L3.99996 2.77781L6.62282 0.154956C6.87796 -0.10019 7.3584 -0.0334256 7.6959 0.304079C8.03341 0.641583 8.10017 1.12202 7.84503 1.37717L5.22217 4.00002L7.84498 6.62283C8.10013 6.87797 8.03336 7.35841 7.69586 7.69592C7.35836 8.03342 6.87792 8.10019 6.62277 7.84504L3.99996 5.22223Z" fill="#0B1739"/>
            </svg>

        </div>
        
    </div>
</template>


<script setup lang="ts">

//IMPORT

import { ref, watch  } from 'vue';

import { useCounterStore } from '@/stores/counter'

import rangeFiltrElement from '@/components/filtr-range-element.vue'

import roomsFiltrElement from '@/components/filtr-apart-rooms.vue'


//DATA

const store = useCounterStore()

const filtrLoaded = ref<boolean>(false)

const minPrice = ref<number | null>(null);
const maxPrice = ref<number | null>(null);

minPrice.value = 0
maxPrice.value = 100000000


const minSize = ref<number | null>(null);
const maxSize = ref<number | null>(null);

minSize.value = 0
maxSize.value = 200

const minRooms = ref<number | null>(null);
const maxRooms = ref<number | null>(null);

minRooms.value = 1
maxRooms.value = 10

const filterValues = ref<{
  minPrice: number | null,
  maxPrice: number | null,
  minSize: number | null,
  maxSize: number | null,
  minRooms: number | null,
  maxRooms: number | null
}>({
  minPrice: minPrice.value,
  maxPrice: minPrice.value,
  minSize: minSize.value,
  maxSize: maxSize.value,
  minRooms: minRooms.value,
  maxRooms: maxRooms.value
});


//EMITS

const emit = defineEmits<{
  (e: 'filterChanged', payload: any): void
}>()


//METHODS
function onRangeUpdatePrice(data: [number, number]){
    console.log('Новый диапазон цен:', data)

    filterValues.value.minPrice = data[0]
    filterValues.value.maxPrice = data[1]

    console.log('filterValues', filterValues.value)
}

function onRangeUpdateSize(data: [number, number]){
    console.log('Новый диапазон размера:', data)
    filterValues.value.minSize = data[0]
    filterValues.value.maxSize = data[1]

    console.log('filterValues', filterValues.value)
}

function onRoomsUpdate(data: any){
    console.log('Новый диапазон комнат:', data)
    filterValues.value.minRooms = data.minRooms
    filterValues.value.maxRooms = data.maxRooms

    console.log('filterValues', filterValues.value)
}

function clearFiltr(){
    store.changeClearFiltrStatus(true)
    preloaderOn()

    filterValues.value = {
        minPrice: minPrice.value,
        maxPrice: minPrice.value,
        minSize: minSize.value,
        maxSize: maxSize.value,
        minRooms: minRooms.value,
        maxRooms: maxRooms.value
    }

    filtrLoaded.value = false 
}

//Preloader START animation
function preloaderOn(){
    store.changePreloaderStatus(true)
}


//HOOKS
watch(
  filterValues, async (newValues, oldValues) => {
    
    if(store.clearFiltrStatus == false){
        console.log('filterValues was changed', newValues)
        emit('filterChanged', newValues)
        filtrLoaded.value = true 
    }
   
  },
  { deep: true } 
)


</script>