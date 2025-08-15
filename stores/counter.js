import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {
    const router = useRouter();

    // const serverUrlDomainRequest = ref('http://syberia.gearsdpz.beget.tech')
    const serverUrlDomainRequest = ref('http://cv-test.gearsdpz.beget.tech')

    const domainUrlCurrent = ref('https://gift-siberia.com')

    const preloaderStatus = ref(true)

    const clearFiltrStatus = ref(false)

    function changePreloaderStatus(newValue) {
        preloaderStatus.value = newValue
        console.log('preloaderStatus', preloaderStatus.value)
    }

    function changeClearFiltrStatus(newValue) {
        clearFiltrStatus.value = newValue
        console.log('preloaderStatus', clearFiltrStatus.value)
        // clearFiltrStatus.value = false
    }

    return {
        serverUrlDomainRequest,
        domainUrlCurrent,
        preloaderStatus,
        clearFiltrStatus,
        changePreloaderStatus,
        changeClearFiltrStatus,

    }
})
