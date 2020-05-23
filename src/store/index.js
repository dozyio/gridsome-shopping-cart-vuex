import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import sharedMutations from 'vuex-shared-mutations'
import cart from './modules/cart'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    plugins: [
        createPersistedState({ fetchBeforeUse: true }),
        sharedMutations({ predicate: ['cart/add', 'cart/remove']})
    ],
    modules: {
        cart
    },
    strict: debug
});
