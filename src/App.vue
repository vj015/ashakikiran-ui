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
    <MobileNav @togglesidebar="togglesidebar" v-if="this.showsidebar" />
    <div class="bodystl" v-if="!this.showsidebar">
      <router-view />
    </div>
    <div class="footerstl" v-if="!this.showsidebar"><FootbarComponent /></div>
    <div><SelfComponent v-if="!this.showsidebar" /></div>
  </div>
</template>
<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import FootbarComponent from "./components/FootbarComponent.vue";
import MobileNav from "./components/MobileNav.vue";
import SelfComponent from "./components/SelfComponent.vue";
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
    SelfComponent,
  },
  methods: {
    togglesidebar(res) {
      this.showsidebar = !this.showsidebar;
      if (res != undefined) {
        this.$router.push(res);
      }
    },
  },
};
</script>
<style>
/* .headerstl {
  position: fixed;
  z-index: 99;
}
.bodystl {
  z-index: 100;
} */
#app {
  position: relative;
}
.bodystl {
  width: 100%;
  height: auto;
}
</style>
