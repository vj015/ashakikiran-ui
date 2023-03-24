<template>
  <div class="home">
    <IntroComponent />
    <AboutComponent />
    <FundraisingComponent />
    <CelebrateComponent />
    <UpcomingEventComponent />
    <DonateComponent />
    <TestimonialComponent src="https://www.youtube.com/embed/bO0oHSqGfYA" />
  </div>
</template>

<script>
import IntroComponent from "@/components/IntroComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import FundraisingComponent from "@/components/FundraisingComponent.vue";
import CelebrateComponent from "@/components/CelebrateComponent.vue";
import UpcomingEventComponent from "@/components/UpcomingEventComponent.vue";
import DonateComponent from "@/components/DonateComponent.vue";
import TestimonialComponent from "@/components/TestimonialComponent.vue";
export default {
  name: "HomeView",
  components: {
    IntroComponent,
    AboutComponent,
    FundraisingComponent,
    CelebrateComponent,
    UpcomingEventComponent,
    DonateComponent,
    TestimonialComponent,
  },
};
</script>
<style scoped></style>
