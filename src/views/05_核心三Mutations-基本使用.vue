<template>
    <div class="app">
        <button @click="changeName">修改name</button>
        <h2>Store Name: {{ $store.state.name }}</h2>

        <button @click="incrementLevel">递增level</button>
        <h2>Store Level: {{ $store.state.level }}</h2>

        <button @click="changeInfo">修改信息</button>
    </div>
</template>

<script>

    import { CHANGE_INFO } from '../store/mutation_types'

export default {
    computed: {

    },
    methods: {
        changeName() {
            //下面这行代码可以实现功能 但不合法。
            // this.$store.state.name = "聂宇博"
            this.$store.commit("changeName", "聂宇博")
        },
        incrementLevel() {
            this.$store.commit("incrementLevel")
        },
        changeInfo() {
            this.$store.commit(CHANGE_INFO, {
                name: "王麻子",
                level: 66
            })
        }
    }
}
</script>

<script setup>


</script>

<style scoped></style>