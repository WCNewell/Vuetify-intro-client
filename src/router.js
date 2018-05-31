import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Products from './components/Products.vue';
import Product from './components/Product.vue';

// import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product,
    },
  ],
});
