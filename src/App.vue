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
    <div class="bodystl" v-if="!this.showsidebar">
      <HomeView />
    </div>
    <!-- <div class="footerstl" v-if="!this.showsidebar"><FootbarComponent /></div> -->
  </div>
</template>
<script>
import NavbarComponent from "./components/NavbarComponent.vue";
// import FootbarComponent from "./components/FootbarComponent.vue";
import MobileNav from "./components/MobileNav.vue";
import HomeView from "./views/HomeView.vue";
export default {
  data() {
    return {
      showsidebar: false,
    };
  },
  components: {
    NavbarComponent,
    // FootbarComponent,
    MobileNav,
    HomeView,
  },
  methods: {
    togglesidebar() {
      this.showsidebar = !this.showsidebar;
    },
  },
};
</script>
<style>
#app {
  position: relative;
}
.bodystl {
  width: 100%;
  height: auto;
}
.footerstl {
  position: absolute;
  bottom: 0;
  width: 100%;
  max-height: 160px !important;
}
</style>
