<template>
    <Layout>
        <h1>Shopping Cart</h1>
        <hr>
        <ClientOnly>
            <div v-if="!countProducts">Empty Shopping Cart</div>
            <table v-if="countProducts" class="cart-table">
                <thead>
                    <tr><th>Product</th><th>Price</th><th></th></tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in getProducts">
                        <td><g-link :to="product.path">{{ product.name }}</g-link></td>
                        <td>{{ product.price }}</td>
                        <td><button v-on:click="removeFromCart(index)">X</button></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </ClientOnly>
        <hr>
        <ClientOnly>
            <div v-if="countProducts">Total: <CartTotal /></div>
        </ClientOnly>
    </Layout>
</template>
<script>
import { mapGetters } from 'vuex'
import CartTotal from '~/components/CartTotal'

export default {
    components: {
        CartTotal
    },
    metaInfo: {
        title: 'Shopping Cart'
    },
    computed: {
        //mapping getters from cart vuex module
        ...mapGetters('cart', {
            getProducts: 'getProducts'
        }),
        countProducts () {
            return this.getProducts.length
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
.cart-table {
    width: 100%;
    text-align: left;
}
</style>
