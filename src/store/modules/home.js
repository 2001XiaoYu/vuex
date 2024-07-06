export default {
    state: () => ({
        // 服务器数据
        banners: [],
        recommends: []
    }),
    mutations: {
        changeBanners(state, banners) {
            state.banners = banners
        },
        changeRecommends(state, recommends) {
            state.recommends = recommends
        }
    },
    actions: {
        async fetchHomeMultidataAction(context) {
            
            const res = await fetch("http://123.207.32.32:8000/home/multidata")
            const data = await res.json()
            console.log(data)

            context.commit("changeBanners", data.data.banner.list)
            context.commit("changeRecommends", data.data.recommend.list)
        }
    }
}