<template>
    <div>
        <ClientOnly>
            <g-link to="/cart/"><span>Cart ({{ countProducts }} item<span v-if="countProducts == 0 || countProducts > 1">s</span>)</span></g-link>
        </ClientOnly>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        //mapping getters from cart vuex module
        ...mapGetters('cart', {
            getProducts: 'getProducts',
            countProducts: 'count'
        }),
    },
    methods: {
        removeFromCart(index){
            this.$store.commit('cart/remove', index)
        }
    }
}
</script>
<style scoped>
</style>
