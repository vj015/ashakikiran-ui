<template>
  <div class="container mt-4">
    <events v-if="this.events" />
    <FundraisingComponent renderinmain="false" v-if="this.fundraising" />
    <div class="mt-4">
      <TestimonialComponent src="https://www.youtube.com/embed/sCPREA5NFTU" />
    </div>
  </div>
</template>
<script>
import events from "@/components/CelebrateComponent.vue";
import FundraisingComponent from "@/components/FundraisingComponent.vue";
import TestimonialComponent from "@/components/TestimonialComponent.vue";
export default {
  data() {
    return {
      events: false,
      fundraising: false,
    };
  },
  components: {
    events,
    FundraisingComponent,
    TestimonialComponent,
  },
  mounted() {
    this.events = this.$route.query.events ? this.$route.query.events : false;
    this.fundraising = this.$route.query.fundraising
      ? this.$route.query.fundraising
      : false;
  },
};
</script>
