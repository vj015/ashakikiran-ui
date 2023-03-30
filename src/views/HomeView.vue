<template>
  <div class="home">
    <IntroComponent />
    <AboutComponent />
    <ReferenceComponent />
    <WallComponent />
    <MainpageUpcoming />
    <DonateComponent />
    <TestimonialComponent src="https://www.youtube.com/embed/bO0oHSqGfYA" />
    <button @click="getuser()">USER</button>
  </div>
</template>

<script>
import { loginuser } from "@/api";
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
  methods: {
    async getuser() {
      console.log("Request is reaching get user in home view");
      await loginuser(JSON.stringify(this.user));
    },
  },
};
</script>
<style scoped></style>
