<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view /> -->
    <NavigationMobile />
    <div class="content" :class="{ open: showNav }">
      <div class="top-bar">
        <div id="navigation-icon" v-if="mobileView" @click="showNav = !showNav">
          <font-awesome-icon icon="fa-solid fa-bars" />
        </div>
        <Navigation v-if="!mobileView" />
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from "./components/NavigationComponent.vue";
import NavigationMobile from "./components/NavigationMobile.vue";
export default {
  data: () => {
    return {
      mobileView: true,
      showNav: false,
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },
  },
  components: {
    Navigation,
    NavigationMobile,
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>
<style>
* {
  font-size: 1rem;
}
body {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma;
  background-color: #7ca971;
}
#app {
  position: relative;
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  padding: 10px;
  color: #333;
  overflow: hidden;
}
.top-bar {
  display: flex;
  width: 100%;
}
#navigation-icon {
  padding: 10px 10px 20px;
  margin-right: 10px;
  cursor: pointer;
}
#navigation-icon i {
  font-size: 2rem;
}
.content {
  position: absolute;
  top: 10px;
  width: calc(100% - 10px);
  height: calc(100vh - 30px);
  padding: 20px;
  background-color: #fff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: 1s transform cubic-bezier(0, 0.12, 0.14, 1);
}
.open {
  transform: translateX(300px);
}
</style>
