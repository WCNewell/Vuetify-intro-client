<template>
  <div class="hello">
    <h1>Home</h1>
        <v-btn :to="{ name: 'Products' }" color="info">Products</v-btn>
      <!-- <router-link :to="{ name: 'Products' }">Products</router-link> -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
