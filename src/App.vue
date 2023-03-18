<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view /> -->
    <div class="headerstl">
      <NavbarComponent
        @togglesidebar="togglesidebar"
        :open="this.showsidebar"
      />
    </div>
    <MobileNav v-if="this.showsidebar" />
    <div class="bodystl" v-if="!this.showsidebar"></div>
    <div class="footerstl" v-if="!this.showsidebar"><FootbarComponent /></div>
  </div>
</template>
<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import FootbarComponent from "./components/FootbarComponent.vue";
import MobileNav from "./components/MobileNav.vue";
export default {
  data() {
    return {
      showsidebar: false,
    };
  },
  components: {
    NavbarComponent,
    FootbarComponent,
    MobileNav,
  },
  methods: {
    togglesidebar() {
      this.showsidebar = !this.showsidebar;
    },
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
