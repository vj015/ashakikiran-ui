<template>
  <div id="app">
    <div class="headerstl">
      <NavbarComponent
        @togglesidebar="togglesidebar"
        :open="this.showsidebar"
      />
    </div>
    <MobileNav @togglesidebar="togglesidebar" v-if="this.showsidebar" />
    <div class="whatsapp">
      <WhatsappComponent />
    </div>
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
import WhatsappComponent from "./components/WhatsappComponent.vue";
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
    WhatsappComponent,
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
  z-index: 2;
}
.whatsapp {
  position: fixed;
  right: 2.5%;
  top: 80%;
  z-index: 4;
}
</style>
