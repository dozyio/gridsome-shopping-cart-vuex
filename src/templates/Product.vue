<template>
    <layout>
        <h1>{{ $page.product.title }}</h1>
        <h4>by {{ $page.product.author }}</h4>
        <div v-html="$page.product.content" />
        <div v-html="$page.product.price" />
        <button v-on:click="addToCart">Add To Cart</button>
    </layout>
</template>
<page-query>
    query Product($id: ID!) {
        product: product(id: $id) {
            title
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
            alert('add to cart')
        }
    }
}
</script>
<style scoped>
</style>
