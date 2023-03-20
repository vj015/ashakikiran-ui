<template>
  <div class="home">
    <IntroComponent />
    <AboutComponent />
    <FundraisingComponent />
  </div>
</template>

<script>
import IntroComponent from "@/components/IntroComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import FundraisingComponent from "@/components/FundraisingComponent.vue";
export default {
  name: "HomeView",
  components: {
    IntroComponent,
    AboutComponent,
    FundraisingComponent,
  },
};
</script>
<style scoped></style>
