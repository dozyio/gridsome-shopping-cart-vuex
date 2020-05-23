<template>
    <div>
        <span>Cart ({{ countProducts }} item<span v-if="countProducts == 0 || countProducts > 1">s</span>)</span>
        <div v-for="(product, index) in getProducts">
            {{ product.name }} - Qty: {{ product.quantity }} <button v-on:click="removeFromCart(index)">X</button>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
        }
    },
    computed: {
        getProducts () {
            return this.$store.state.cart.products
        },
        countProducts () {
            return this.$store.state.cart.products.length
        }
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
