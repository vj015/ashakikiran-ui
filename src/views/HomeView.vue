<template>
  <div class="home">
    <IntroComponent />
    <AboutComponent />
    <ReferenceComponent />
    <WallComponent />
    <MainpageUpcoming />
    <DonateComponent />
    <TestimonialComponent src="https://www.youtube.com/embed/bO0oHSqGfYA" />
  </div>
</template>

<script>
import IntroComponent from "@/components/IntroComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import DonateComponent from "@/components/DonateComponent.vue";
import TestimonialComponent from "@/components/TestimonialComponent.vue";
import ReferenceComponent from "@/components/ReferenceComponent.vue";
import WallComponent from "@/components/WallComponent.vue";
import MainpageUpcoming from "@/components/MainpageUpcoming.vue";
export default {
  name: "HomeView",
  data() {
    return {
      user: {
        username: "9076526926",
        password: "123",
      },
    };
  },
  components: {
    IntroComponent,
    AboutComponent,
    DonateComponent,
    TestimonialComponent,
    ReferenceComponent,
    WallComponent,
    MainpageUpcoming,
  },
  methods: {},
  mounted() {
    window.scrollTo(0, 0, "smooth");
  },
};
</script>
<style scoped></style>
