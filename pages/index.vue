<template>
    <main class="main">

        <section class="apartment-sec">
            <div class="container">
                <div class="apartment-sec__body">
                    <h1 class="apartment-sec__title">Квартиры</h1>

                    <div class="apartment-sec__table apartment-table">
                        <div class="apartment-table__header">
                            <div class="apartment-table__header-element apartment-table__header-element--type-1">
                                Планировка
                            </div>
                            <div class="apartment-table__header-element apartment-table__header-element--type-2">
                                Квартира
                            </div>
                            <div class="apartment-table__header-element apartment-table__header-element--hover apartment-table__header-element--type-3">
                                S, м²
                                <div class="apartment-table__header-element-direction-btn-container">
                                    <div class="apartment-table__header-element-direction-btn" @click="sortApartment('size','top')" :class="{'activ':sortActivBtn.btnName == 'size' && sortActivBtn.direction == 'top'}">
                                        <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.4">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.03447 0.253496C3.8722 0.0898395 3.65794 2.7968e-07 3.42826 2.9976e-07C3.19914 3.1979e-07 2.98374 0.0898396 2.82262 0.253496L0.167524 3.01277C-0.0558768 3.2388 -0.0558768 3.60445 0.167524 3.83048C0.390353 4.05651 0.752023 4.05651 0.975423 3.83048L3.42826 1.27549L5.88167 3.83048C6.10507 4.05651 6.46617 4.05651 6.68957 3.83048C6.91297 3.60445 6.91297 3.2388 6.68957 3.01277L4.03447 0.253496Z" fill="#FF0000"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.03447 0.253496C3.8722 0.0898395 3.65794 2.7968e-07 3.42826 2.9976e-07C3.19914 3.1979e-07 2.98374 0.0898396 2.82262 0.253496L0.167524 3.01277C-0.0558768 3.2388 -0.0558768 3.60445 0.167524 3.83048C0.390353 4.05651 0.752023 4.05651 0.975423 3.83048L3.42826 1.27549L5.88167 3.83048C6.10507 4.05651 6.46617 4.05651 6.68957 3.83048C6.91297 3.60445 6.91297 3.2388 6.68957 3.01277L4.03447 0.253496Z" fill="#0B1739"/>
                                        </g>
                                        </svg>

                                    </div>
                                    <div class="apartment-table__header-element-direction-btn" @click="sortApartment('size','down')" :class="{'activ':sortActivBtn.btnName == 'size' && sortActivBtn.direction == 'down'}">
                                        <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.4">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.82332 3.7465C2.98558 3.91016 3.19984 4 3.42953 4C3.65864 4 3.87404 3.91016 4.03517 3.7465L6.69026 0.987232C6.91366 0.761203 6.91366 0.395551 6.69026 0.169522C6.46743 -0.0565073 6.10577 -0.0565073 5.88236 0.169522L3.42953 2.72451L0.976121 0.169522C0.75272 -0.0565073 0.391623 -0.0565073 0.168222 0.169522C-0.0551788 0.395551 -0.0551788 0.761203 0.168222 0.987232L2.82332 3.7465Z" fill="#FF0000"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.82332 3.7465C2.98558 3.91016 3.19984 4 3.42953 4C3.65864 4 3.87404 3.91016 4.03517 3.7465L6.69026 0.987232C6.91366 0.761203 6.91366 0.395551 6.69026 0.169522C6.46743 -0.0565073 6.10577 -0.0565073 5.88236 0.169522L3.42953 2.72451L0.976121 0.169522C0.75272 -0.0565073 0.391623 -0.0565073 0.168222 0.169522C-0.0551788 0.395551 -0.0551788 0.761203 0.168222 0.987232L2.82332 3.7465Z" fill="#0B1739"/>
                                        </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>


                            <div class="apartment-table__header-element apartment-table__header-element--hover apartment-table__header-element--type-4">
                                Этаж
                                <div class="apartment-table__header-element-direction-btn-container">
                                    <div class="apartment-table__header-element-direction-btn" @click="sortApartment('level','top')" :class="{'activ':sortActivBtn.btnName == 'level' && sortActivBtn.direction == 'top'}">
                                        <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.4">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.03447 0.253496C3.8722 0.0898395 3.65794 2.7968e-07 3.42826 2.9976e-07C3.19914 3.1979e-07 2.98374 0.0898396 2.82262 0.253496L0.167524 3.01277C-0.0558768 3.2388 -0.0558768 3.60445 0.167524 3.83048C0.390353 4.05651 0.752023 4.05651 0.975423 3.83048L3.42826 1.27549L5.88167 3.83048C6.10507 4.05651 6.46617 4.05651 6.68957 3.83048C6.91297 3.60445 6.91297 3.2388 6.68957 3.01277L4.03447 0.253496Z" fill="#FF0000"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.03447 0.253496C3.8722 0.0898395 3.65794 2.7968e-07 3.42826 2.9976e-07C3.19914 3.1979e-07 2.98374 0.0898396 2.82262 0.253496L0.167524 3.01277C-0.0558768 3.2388 -0.0558768 3.60445 0.167524 3.83048C0.390353 4.05651 0.752023 4.05651 0.975423 3.83048L3.42826 1.27549L5.88167 3.83048C6.10507 4.05651 6.46617 4.05651 6.68957 3.83048C6.91297 3.60445 6.91297 3.2388 6.68957 3.01277L4.03447 0.253496Z" fill="#0B1739"/>
                                        </g>
                                        </svg>

                                    </div>
                                    <div class="apartment-table__header-element-direction-btn" @click="sortApartment('level','down')" :class="{'activ':sortActivBtn.btnName == 'level' && sortActivBtn.direction == 'down'}">
                                        <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.4">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.82332 3.7465C2.98558 3.91016 3.19984 4 3.42953 4C3.65864 4 3.87404 3.91016 4.03517 3.7465L6.69026 0.987232C6.91366 0.761203 6.91366 0.395551 6.69026 0.169522C6.46743 -0.0565073 6.10577 -0.0565073 5.88236 0.169522L3.42953 2.72451L0.976121 0.169522C0.75272 -0.0565073 0.391623 -0.0565073 0.168222 0.169522C-0.0551788 0.395551 -0.0551788 0.761203 0.168222 0.987232L2.82332 3.7465Z" fill="#FF0000"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.82332 3.7465C2.98558 3.91016 3.19984 4 3.42953 4C3.65864 4 3.87404 3.91016 4.03517 3.7465L6.69026 0.987232C6.91366 0.761203 6.91366 0.395551 6.69026 0.169522C6.46743 -0.0565073 6.10577 -0.0565073 5.88236 0.169522L3.42953 2.72451L0.976121 0.169522C0.75272 -0.0565073 0.391623 -0.0565073 0.168222 0.169522C-0.0551788 0.395551 -0.0551788 0.761203 0.168222 0.987232L2.82332 3.7465Z" fill="#0B1739"/>
                                        </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>


                            <div class="apartment-table__header-element apartment-table__header-element--hover apartment-table__header-element--type-5">
                                Цена, ₽

                                <div class="apartment-table__header-element-direction-btn-container">
                                    <div class="apartment-table__header-element-direction-btn" @click="sortApartment('cost','top')" :class="{'activ':sortActivBtn.btnName == 'cost' && sortActivBtn.direction == 'top'}">
                                        <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.4">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.03447 0.253496C3.8722 0.0898395 3.65794 2.7968e-07 3.42826 2.9976e-07C3.19914 3.1979e-07 2.98374 0.0898396 2.82262 0.253496L0.167524 3.01277C-0.0558768 3.2388 -0.0558768 3.60445 0.167524 3.83048C0.390353 4.05651 0.752023 4.05651 0.975423 3.83048L3.42826 1.27549L5.88167 3.83048C6.10507 4.05651 6.46617 4.05651 6.68957 3.83048C6.91297 3.60445 6.91297 3.2388 6.68957 3.01277L4.03447 0.253496Z" fill="#FF0000"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.03447 0.253496C3.8722 0.0898395 3.65794 2.7968e-07 3.42826 2.9976e-07C3.19914 3.1979e-07 2.98374 0.0898396 2.82262 0.253496L0.167524 3.01277C-0.0558768 3.2388 -0.0558768 3.60445 0.167524 3.83048C0.390353 4.05651 0.752023 4.05651 0.975423 3.83048L3.42826 1.27549L5.88167 3.83048C6.10507 4.05651 6.46617 4.05651 6.68957 3.83048C6.91297 3.60445 6.91297 3.2388 6.68957 3.01277L4.03447 0.253496Z" fill="#0B1739"/>
                                        </g>
                                        </svg>

                                    </div>
                                    <div class="apartment-table__header-element-direction-btn" @click="sortApartment('cost','down')" :class="{'activ':sortActivBtn.btnName == 'cost' && sortActivBtn.direction == 'down'}">
                                        <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.4">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.82332 3.7465C2.98558 3.91016 3.19984 4 3.42953 4C3.65864 4 3.87404 3.91016 4.03517 3.7465L6.69026 0.987232C6.91366 0.761203 6.91366 0.395551 6.69026 0.169522C6.46743 -0.0565073 6.10577 -0.0565073 5.88236 0.169522L3.42953 2.72451L0.976121 0.169522C0.75272 -0.0565073 0.391623 -0.0565073 0.168222 0.169522C-0.0551788 0.395551 -0.0551788 0.761203 0.168222 0.987232L2.82332 3.7465Z" fill="#FF0000"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.82332 3.7465C2.98558 3.91016 3.19984 4 3.42953 4C3.65864 4 3.87404 3.91016 4.03517 3.7465L6.69026 0.987232C6.91366 0.761203 6.91366 0.395551 6.69026 0.169522C6.46743 -0.0565073 6.10577 -0.0565073 5.88236 0.169522L3.42953 2.72451L0.976121 0.169522C0.75272 -0.0565073 0.391623 -0.0565073 0.168222 0.169522C-0.0551788 0.395551 -0.0551788 0.761203 0.168222 0.987232L2.82332 3.7465Z" fill="#0B1739"/>
                                        </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="apartment-table__body">

                            <template v-if="all_object?.length">
                                <apartment v-for="(item,index) in all_object" :key="index" :apartmentData="item" />
                            </template>

                            <template v-else>
                                <div class="apartment-table__no-data-notification">
                                    Нет квартир с такими параметрами
                                </div>
                            </template>

                            

                        </div>

                        <div class="apartment-table__load-more-btn-wrapper" v-if="currentPage < totalPages">
                            <button class="load-more-btn" @click="loadMore()">Загрузить еще</button>
                        </div>

                    </div>
                </div>
                <aside class="apartment-sec__aside">
                    <productFiltr @filterChanged="filtrNewValueStart" />
                </aside>
            </div>
        </section>

    </main>
    
</template>

<script setup lang="ts">

//IMPORT

import { useCounterStore } from '@/stores/counter'

import apartment from '@/components/apartment.vue'

import productFiltr from '@/components/apartments-filtr.vue'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';


//DATA

const store = useCounterStore()

const route = useRoute()

const currentPage = ref<number | null>(1)

const perPage = ref<number | null>(20)

const totalPages = ref<number | null>(null)

const minPrice = ref<number | null>(0);
const maxPrice = ref<number | null>(100000000);

const minSize = ref<number | null>(0);
const maxSize = ref<number | null>(200);

const minRooms = ref<number | null>(1);
const maxRooms = ref<number | null>(10);


const filterValues = ref<{
  minPrice: number | null,
  maxPrice: number | null,
  minSize: number | null,
  maxSize: number | null,
  minRooms: number | null,
  maxRooms: number | null
}>({
  minPrice: minPrice.value,
  maxPrice: maxPrice.value,
  minSize: minSize.value,
  maxSize: maxSize.value,
  minRooms: minRooms.value,
  maxRooms: maxRooms.value
});

const sortActivBtn = ref<{
  btnName: string | null,
  direction: string | null,

}>({
  btnName: null,
  direction: null,
});



//NETHODS

//ssr get data apartment on server
const { data: all_object, error, pending } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/apartments?min_price=1000000&max_price=80000000&min_size=42&max_size=125&min_rooms=1&max_rooms=5&page=${currentPage.value || 1}&per_page=${perPage.value}`, {
    onResponse({ response }) {
      const total = response.headers.get('X-WP-Total')
      const pages = response.headers.get('X-WP-TotalPages')
      
      if (pages) totalPages.value = Number(pages)
      
      console.log('X-WP-Total', total)
      console.log('X-WP-TotalPages', pages)
    },
})

console.log(all_object)


//get apartment on client side
async function fetchClientData() {
  const res = await fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/apartments?min_price=${filterValues.value.minPrice}&max_price=${filterValues.value.maxPrice}&min_size=${filterValues.value.minSize}&max_size=${filterValues.value.maxSize}&min_rooms=${filterValues.value.minRooms}&max_rooms=${filterValues.value.maxRooms}&page=${currentPage.value || 1}&per_page=${perPage.value}`)
  const data = await res.json()
  all_object.value = data
  preloaderOff()
  sortActivBtn.value = {
    btnName: null,
    direction: null
}

  store.changeClearFiltrStatus(false)
  const pages = res.headers.get('X-WP-TotalPages')
  if (pages) totalPages.value = Number(pages)
}


//load more
async function loadMore(){

    currentPage.value = currentPage.value + 1

    if(currentPage.value > totalPages.value){
       currentPage.value = totalPages.value
    }
    else{
        preloaderOn()

        const loadedApartments = await fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/apartments?min_price=${filterValues.value.minPrice}&max_price=${filterValues.value.maxPrice}&min_size=${filterValues.value.minSize}&max_size=${filterValues.value.maxSize}&min_rooms=${filterValues.value.minRooms}&max_rooms=${filterValues.value.maxRooms}&page=${currentPage.value || 1}&per_page=${perPage.value}`)
        const data = await loadedApartments.json()
        for(let i = 0; i < data.length; i++){
            all_object.value.push(data[i])   
        }

        console.log('loadMore', data)
    
        console.log('all_object', all_object.value)
        preloaderOff()
    }

}


function filtrNewValueStart(newFilters: any) {
    
    currentPage.value = 1
    totalPages.value = null
    filterValues.value = newFilters
    preloaderOn()
    fetchClientData()

    console.log('Filters updated in parent', filterValues.value)
}

//sort apartment
function sortApartment(value1: string, value2: string) {

    sortActivBtn.value = {
        btnName: value1,
        direction: value2
    }

    let objectsArray = [...all_object.value]

    let currentAcfField = null

    if(value1 === 'size'){
        currentAcfField = 'ploshhad'
    }

    else if(value1 === 'level'){
        currentAcfField = 'etazh'
    }

    else if(value1 === 'cost'){
        currentAcfField = 'czena'
    }
    
    if (value2 === 'top') {
        objectsArray.sort((a, b) => {
            let sizeA = parseFloat(a.acf[currentAcfField].replace(/[^\d.]/g, ''));
            let sizeB = parseFloat(b.acf[currentAcfField].replace(/[^\d.]/g, ''));
            return sizeB - sizeA; 
        });
        all_object.value = objectsArray
        console.log(objectsArray);
    }
    else if (value2 === 'down'){
        objectsArray.sort((a, b) => {
            let sizeA = parseFloat(a.acf[currentAcfField].replace(/[^\d.]/g, ''));
            let sizeB = parseFloat(b.acf[currentAcfField].replace(/[^\d.]/g, ''));
            return sizeA - sizeB;
        });
        all_object.value = objectsArray
        console.log(objectsArray);
    }
   
}

//Preloader START animation
function preloaderOn(){
    store.changePreloaderStatus(true)
}

//Preloader END animation
function preloaderOff(){
    setTimeout(()=>{
        store.changePreloaderStatus(false)
    },400)
}


//HOOKS
onMounted(async () => {
  fetchClientData()
})

watch(
  () => store.clearFiltrStatus,
  (newValue) => {
    if (newValue == true) {

        currentPage.value = 1
        totalPages.value = null

        filterValues.value = {
            minPrice: minPrice.value,
            maxPrice: maxPrice.value,
            minSize: minSize.value,
            maxSize: maxSize.value,
            minRooms: minRooms.value,
            maxRooms: maxRooms.value
        }

        fetchClientData()
    }
  }
)

</script>


