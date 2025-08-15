<template>
    <div class="apartment" v-if="apartmentData?.acf">
        <div class="apartment__col apartment__col--type-1">
            <img :src="apartmentData.acf.img.url" :alt="apartmentData.acf.img.alt" class="apartment__plan">
        </div>
        <div class="apartment__data-wrapper">
            <div class="apartment__col apartment__col--type-2">
                <p class="apartment__text-value">{{apartmentData.acf.kolichestvo_komnat}}-комнатная №{{ apartmentData.acf.nomer_kvartiry }}</p>
            </div>
            <div class="apartment__col apartment__col--type-3">
                <p class="apartment__text-value">{{apartmentData.acf.ploshhad}} <span class="apartment__text-value-pc-hiden">м²</span></p>
            </div>
            <div class="apartment__col apartment__col--type-4">
                <p class="apartment__text-value">{{ apartmentData.acf.etazh }} <span class="apartment__text-value-grey">из 17 </span></p>
            </div>
            <div class="apartment__col apartment__col--type-5">
                <p class="apartment__text-value">{{ apartmentData.acf.czena }} <span class="apartment__text-value-pc-hiden">₽</span></p>
            </div>
        </div>
       
    </div>
</template>


<script setup lang="ts" >

import { ref, watch } from 'vue'

const props = defineProps({
  apartmentData: Object,
})


</script>