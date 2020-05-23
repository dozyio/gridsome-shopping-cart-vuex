const state = () => ({
    products: [],
})

const getters = {
    getProducts: state => {
        return state.products
    },
    count: state => {
        return state.products.length
    },
    total: state => {
        let total = 0;
        state.products.forEach(product => {
            total += Number(product.price.replace('£',''))
        })
        return total
    }
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
