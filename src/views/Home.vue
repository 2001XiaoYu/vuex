<template>
    <div class="app">
        <button @click="changeName">修改name</button>
        <h2>Store Name: {{ $store.state.name }}</h2>
    </div>
</template>

<script>

export default {
    computed: {

    },
    methods: {
        changeName() {
            //下面这行代码可以实现功能 但不合法。
            // this.$store.state.name = "聂宇博"
            this.$store.commit("changeName")
        }
    }
}
</script>

<script setup>


</script>

<style scoped></style>