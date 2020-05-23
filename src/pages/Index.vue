<template>
  <Layout>
    <h1>Home</h1>
    <div v-for="({node}, index) of $page.products.edges" :key="node.id">
        <g-link :to="node.path">{{ node.name }}</g-link>
    </div>
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
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style scoped>
</style>
