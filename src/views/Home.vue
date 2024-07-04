<template>
    <div class="home">
        <!-- <button @click="incrementLevel">修改Level</button> -->
        <h2>doubleCounter: {{ doubleCounter }}</h2>
        <h2>friendsTotalAge: {{ totalAge }}</h2>
        <h2>message: {{ message }}</h2>

        <!-- 根据id获取某一个朋友的信息 -->
        <h2>id-111的朋友信息: {{ getFriendById(111) }}</h2>
        <h2>id-112的朋友信息: {{ getFriendById(112) }}</h2>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(["doubleCounter", "totalAge",]),
        ...mapGetters(["getFriendById"])
    }
}
</script>

<script setup>
    import { computed, toRefs } from 'vue'
    import { mapGetters, useStore } from 'vuex'

    const store = useStore()

    // const { message: messageFn } = mapGetters(["message"])
    // const message = computed(messageFn.bind({ $store: store }))

    const { message } = toRefs(store.getters)

</script>

<style scoped></style>