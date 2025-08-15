<template>
    <div class="apartments-filtr__range-wrapper range-filtr">
        <p class="range-filtr__title" v-html="title"></p>

        <div class="range-filtr__row">
            <div class="range-filtr__value">
                от 
                <b>{{ valueRange[0] }}</b>
            </div>

            <div class="range-filtr__value">
                до 
                <b>{{ valueRange[1] }}</b>
            </div>
        </div>

        <div class="range-filtr__slider-wrapper">
            <Slider v-model="valueRange" :min="minRange" :max="maxRange"  @update="sendDataToParent()" />
        </div>
        
    </div>
</template>

<script setup lang="ts" >

//IMPORT 

import { ref, watch } from 'vue'

import { useCounterStore } from '@/stores/counter'

import Slider from '@vueform/slider'

import '@vueform/slider/themes/default.css'

const store = useCounterStore()



//PROPS
const props = defineProps({
  title: String,
  minRange: Number,
  maxRange: Number,
})

//EMITS
const emit = defineEmits<{
  (e: 'changeValue', valueRange: [number, number]): void
}>()


//METHODS
function sendDataToParent(){
    emit('changeValue', valueRange.value)
    console.log('gg',valueRange.value)
}


//DATA
const valueRange = ref<[number, number]>([props.minRange, props.maxRange])

//HOOKS
watch(
  () => store.clearFiltrStatus,
  (newValue) => {
    if (newValue == true) {
      console.log('Фильтр очищен s')

      valueRange.value = [props.minRange , props.maxRange]
    }
  }
)



</script>