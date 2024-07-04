import { computed } from 'vue'
import { useStore, mapState } from 'vuex'

export default function useState(mapper) {
    const store = useStore()
    const stateFnObj = mapState(mapper)
    
    const newState = {}
    Object.keys(stateFnObj).forEach(key => {
        newState[key] = computed(stateFnObj[key].bind({ $store: store }))
    })

    return newState
}