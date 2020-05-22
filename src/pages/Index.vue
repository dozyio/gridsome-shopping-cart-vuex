<template>
  <Layout>
    <h1>Home</h1>
  </Layout>
</template>
<page-query>
    query($page: Int){
        products: allProducts() {
            edges {
                node {
                    id
                    title
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
