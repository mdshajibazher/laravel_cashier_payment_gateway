<template>
  <div>
     <h3>Products</h3>
    <div class="row">
        <div class="col-md-3" v-for="product in products" :key="product.id">
           <div class="card">
    
            <div class="card-body">
                 <img alt="ecommerce" style="width: 100%" class="img-thubmnail" src="https://dummyimage.com/300x300">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">{{product.description}}</p>
                <span class="badge bg-warning" v-for="category in product.categories" :key="category.id">{{category.name}}</span> <br>
                <strong>Price: {{formatCurrency(product.price)}}</strong> <br>
                <router-link :to="{name: 'products.show', params: {slug: product.slug}}" class="btn btn-primary">Go</router-link>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        formatCurrency(amount) {
            amount = (amount / 100);
            return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
    }
}
</script>

<style>

</style>