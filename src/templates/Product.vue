<template>
    <layout>
        <h1>{{ $page.product.name }}</h1>
        <h4>by {{ $page.product.author }}</h4>
        <div v-html="$page.product.content" />
        <div v-html="$page.product.price" />
        <button v-on:click="addToCart()">Add To Cart</button>
    </layout>
</template>
<page-query>
    query Product($id: ID!) {
        product: product(id: $id) {
            id
            name
            content
            path
            price
            author
            excerpt
            content
        }
    }
</page-query>
<script>
export default {
    methods: {
        addToCart() {
            //Add the product to the Vuex cart module's state.
            //This has to include all fields you want to use at a later point
            //due to not being able to query the product on a static site
            this.$store.commit('cart/add', {
                id: this.$page.product.id,
                name: this.$page.product.name,
                price: this.$page.product.price,
                path: this.$page.product.path,
                }
            )
        }
    }
}
</script>
<style scoped>
</style>
