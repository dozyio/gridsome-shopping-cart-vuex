import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import cart from './modules/cart'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

var store = {
    plugins: [],
    modules: {
        cart
    },
    strict: debug
}

if (process.isClient){
    //workaround for window not defined
    //use require here instead of import at top of file
    const sharedMutations = require('vuex-shared-mutations').default
    store.plugins.push(createPersistedState({ fetchBeforeUse: true }))
    store.plugins.push(sharedMutations({ predicate: ['cart/add', 'cart/remove']}))
}

export default new Vuex.Store(store)
