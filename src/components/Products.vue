<template>
  <div class="products">
    <h1>Products</h1>
        <v-btn :to="{ name: 'Home' }" color="success">Home</v-btn>
      <v-layout row wrap>
    <v-flex xs4 v-for="product in products" :key="product.id">
      <v-card>
        <v-card-media :src="product.image" height="400px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ product.title }}</h3>
            <div>{{ product.description  }}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">View</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
import API from '@/library/api'

export default {
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      API.getProducts()
      .then(products => {
        this.products = products
      })
    }
  }
}
</script>