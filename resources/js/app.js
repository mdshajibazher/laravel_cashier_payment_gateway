/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import axios from 'axios';
Vue.use(Vuex);
Vue.use(VueRouter);


const router = new VueRouter({
    mode: 'history',
    routes: require('./routes')
});

const store =  new Vuex.Store({
    state: {
        products: [],
        cart: [],
        orders: {},
    },

    mutations: {
        UPDATE_PRODUCTS(state, products){
            state.products = products;
        },
        addToCart(state, product){
            let productIndex = state.cart.findIndex( item => item.slug === product.slug);

            if(productIndex != -1){
                state.cart[productIndex].quantity++;
                return;
            }
            product.quantity = 1;
            state.cart.push(product)
        },

        removeFromCart(state,index){
            state.cart.splice(index,1)
        },
        updateOrder(state,order){
            state.order = order;
        },

        UPDATE_CART(state, cart){
            state.cart = cart;
        }
    },

    actions:{
        getProducts({commit}){
            axios.get('/api/products/')
            .then( (res) => {
                commit('UPDATE_PRODUCTS',res.data)
            })
            .catch( (e) => {
                console.log(e);
            })
        },

        clearCart({commit}){
            commit('UPDATE_CART',[]);
        }
    }
});



const app = new Vue({
    router,
    store,
    el: '#app',
    created(){
        store.dispatch('getProducts')
        .then( _ => {})
        .catch( (e) => {
            console.log(e);
        })
    }
});
