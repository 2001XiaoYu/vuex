import { createStore } from "vuex"

const store = createStore({
    state: () => ({
        counter: 100,
        name: "patrick",
        level: 100,
        avatarURL: "http://xxxx",
        friends: [
            { id: 111, name: "why", age: 20 },
            { id: 112, name: "kobe", age: 30 },
            { id: 113, name: "james", age: 40 },
        ]
    }),
    getters: {
        //1.基本使用
        doubleCounter(state) {
            return state.counter * 2
        },
        totalAge(state) {
            return state.friends.reduce((preValue, item) => {
                return preValue + item.age
            }, 0)
        },
        //2.在getters属性中，获取其他的getters
        message(state, getters) {
            return `name:${state.name} level:${state.level} friendsTotalAge:${getters.totalAge}`
        },
        //3.在该getters属性中，获取其他的getters（了解）
        getFriendById(state) {
            return function (id) {
                const friend = state.friends.find(item => item.id === id)
                return friend
            }
        }
    },
    mutations: {
        increment(state) {
            state.counter++
        }
    },
    // modules: {
    //     a: {
    //         state() {
    //             return {}
    //         }
    //     }
    // }
})

export default store