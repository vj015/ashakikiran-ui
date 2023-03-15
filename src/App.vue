<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view /> -->
    <NavbarComponent />
  </div>
</template>
<script>
import NavbarComponent from "./components/NavbarComponent.vue";
export default {
  components: {
    NavbarComponent,
  },
};
</script>
