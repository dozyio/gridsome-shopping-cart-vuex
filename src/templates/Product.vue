<template>
    <layout>
        <h1>$page.product.title</h1>
        <p>$page.product.content</p>
        <button :click="addToCart">Add To Cart</button>
    </layout>
</template>
<page-query>
    query Product($id: ID!) {
        product: product(id: $id) {
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
