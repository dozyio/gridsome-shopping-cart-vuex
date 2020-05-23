<template>
    <Layout>
        <h1>Home</h1>
        <div v-for="edge in $page.products.edges" :key="edge.node.id">
            <g-link :to="edge.node.path">{{ edge.node.name }}</g-link>
        </div>
        <Pager :info="$page.products.pageInfo"/>
    </Layout>
</template>
<page-query>
    query($page: Int){
        products: allProduct(perPage: 10, page: $page) @paginate {
            pageInfo {
                totalPages
                currentPage
            }
            edges {
                node {
                    id
                    name
                    path
                }
            }
        }
    }
</page-query>
<script>
import { Pager } from 'gridsome'

export default {
    components: {
        Pager
    },
    metaInfo: {
        title: 'Hello, world!'
    }
}
</script>

<style scoped>
</style>
