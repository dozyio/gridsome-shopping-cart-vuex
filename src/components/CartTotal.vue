<template>
    <span>&pound;{{ total }}</span>
</template>
<script>
import { mapGetters } from 'vuex'
import CartTotal from '~/components/CartTotal'

export default {
    computed: {
        //mapping getters from cart vuex module
        ...mapGetters('cart', {
            total: 'total'
        }),
    },
}
</script>

<style scoped>
</style>
