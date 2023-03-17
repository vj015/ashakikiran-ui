<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view /> -->
    <div class="headerstl">
      <NavbarComponent />
    </div>
    <div class="bodystl"></div>
    <div class="footerstl"><FootbarComponent /></div>
  </div>
</template>
<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import FootbarComponent from "./components/FootbarComponent.vue";
export default {
  components: {
    NavbarComponent,
    FootbarComponent,
  },
};
</script>
<style>
.footerstl {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
