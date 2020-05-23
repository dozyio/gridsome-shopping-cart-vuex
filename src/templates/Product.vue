<template>
    <layout>
        <h1>{{ $page.product.name }}</h1>
        <h4>by {{ $page.product.author }}</h4>
        <div v-html="$page.product.content" />
        <div v-html="$page.product.price" />
            {{ $page.product.id }}
        <button v-on:click="addToCart($page.product.id)">Add To Cart</button>
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
            this.$store.commit('cart/add', {
                id: this.$page.product.id,
                name: this.$page.product.name,
                price: this.$page.product.price,
                }
            )

        }
    }
}
</script>
<style scoped>
</style>
