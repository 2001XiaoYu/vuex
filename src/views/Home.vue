<template>
    <div class="home">
        <h2>Home当前计数: {{ $store.state.counter }}</h2>
        <h2>Computed当前计数: {{ storeCounter }}</h2>
        <h2>Setup当前计数: {{ counter }}</h2>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
    export default {
        computed: {
            storeCounter() {
                return this.$store.state.counter
            }
        }
    }
</script>

<script setup>
import { toRefs } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
//这里拿到的数据不是响应式的,解构也不行 ，可以通过toRefs转换
const { counter } = toRefs(store.state)

function increment() {
    // console.log(store.state.counter);
    // store.state.counter++
    store.commit("increment")
}
</script>

<style scoped></style>