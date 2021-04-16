<template>
    <section  v-if="product">
        <div class="container">
            <div class="row justify-content-center">
                <img alt="ecommerce" class="img-thubmnail" src="https://dummyimage.com/320x320">
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2
                        v-for="category in product.categories"
                        v-text="category.name"
                    ></h2>
                    <h1
                        class="heading"
                        v-text="product.name"
                    ></h1>
                    <p
                        class="leading-relaxed"
                        v-text="product.description"
                    ></p>
                    <div>
                        <span
                            class="title-font font-medium text-2xl text-gray-900"
                            v-text="formatCurrency(product.price)"
                        ></span> <br>
                        <button
                            class="btn btn-danger"
                            @click="$store.commit('addToCart', product)"
                        >Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
            },
            product() {
                return this.products.find(product => product.slug === this.$route.params.slug);
            }
        }
    }
</script>
