<template>
     <div class="container">
        <div class="row justify-content-center gap-2" >
                <div class="card" v-for="product in products"  style="width: 18rem;" :key="product.id">
                    <img :src="product.image" class="card-img-top" alt="product.make">
                    <div class="card-body">
                      <h5 class="card-title">{{ product.make }}</h5>
                      <p class="card-text">{{ product.spec }}</p>
                      <a href="#" class="btn btn-primary">{{ product.amount}}</a>
                    </div>
                  </div>
        </div>
     </div>
</template>

<script>
    export default {
        computed:{
            products(){
                return this.$store.state.products
            }
        },
        mounted(){
            this.$store.dispatch('fetchProducts')
        }
    }
</script>

<style  scoped>

</style>