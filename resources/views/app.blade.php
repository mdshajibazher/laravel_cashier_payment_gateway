<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    
    <title>Document</title>
</head>
<body>
    <div id="app" class="container">
        <div class="d-flex">
       
        <nav class="">
        
            <router-link
                class="btn btn-dark"
                :to="{name: 'products.index'}"
            >
                Products
            </router-link>
        </nav>
        <router-link
            class="btn btn-primary"
            :to="{name: 'order.checkout'}"
        >
            Checkout<span class="inline-block ml-1" v-text="'(' + $store.state.cart.length + ' items)'"></span>
        </router-link>

    </div>

        <router-view></router-view>
    </div>
    <script src="{{asset('js/app.js')}}"></script>
</body>
</html>