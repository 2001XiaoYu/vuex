<template>
    <div class="home">
        <h2>当前计数：{{ $store.state.counter }}</h2>
        <button @click="actionBtnClick">发起action</button>
        <button @click="nameBtnClick">发起action修改name</button>
        <h2>name：{{ $store.state.name }}</h2>
    </div>
</template>

<script>
    export default {
        methods: {
            actionBtnClick() {
                this.$store.dispatch("incrementAction")
            },
            nameBtnClick() {
                this.$store.dispatch("changeNameAction", "kobe")
            }
        }
    }
</script>

<script setup>

    // const store = useStore()

</script>

<style scoped></style>