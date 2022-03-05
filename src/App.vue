<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header class='text-center'>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/" :class="{active: $router.name === 'Home'}">Home</RouterLink>
        <RouterLink to="/cart" :class="{active: $router.name === 'Cart'}">Cart</RouterLink>
      </nav>
    </div>
  </header>

  <div class='container'>
  <RouterView />
  </div>
  
</template>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

body {
  background-color: rgba(245, 245, 245, .7);
}

#nav {
  background-color: white;
  padding: 10px;
  line-height: 30px;
  height: 30px;
  width:100%;
}

a {
  font-weight: bold;
  color: garkgray;
  text-decoration: none;
  margin: 0 5px;
  font-size: 1.25rem;

  &.active {
    color: #2c3e50;
  }
}

.text-center {
  text-align: center;
}

.container {
  display: block;
  width: 90%;
  padding: 10px;
  margin: 0 auto;
}
</style>
