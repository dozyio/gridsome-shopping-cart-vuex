const state = () => ({
    products: [],
})

const getters = {
    getProducts: (state, getters) => {
        return state.products
    },
}

const actions = {
}

const mutations = {
    add(state, payload) {
        state.products.unshift(JSON.parse(JSON.stringify(payload)))
    },
    remove(state, payload) {
        state.products.splice(payload,1)
    },
    removeAll(state, payload){
        state.products = []
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
