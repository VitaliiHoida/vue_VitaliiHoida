<template>
  <div>
    <nav>
      <router-link class="rout" active-class="active" to="/cart">CART</router-link>
      <router-link class="rout" active-class="active" to="/">HOME</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {}
}
</script>

<style>
.rout {
  margin: 10px;
  padding: 10px;
  text-decoration: none;
  color: #0a53be;
}

.active {
  border: 1px solid #fff;
  background-color: #0a53be;
  color: #fff;

}
</style>
