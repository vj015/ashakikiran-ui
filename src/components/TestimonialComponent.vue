<template>
  <div class="formatframe">
    <iframe width="900" height="500" :src="src"> </iframe>
  </div>
</template>
<script>
export default {
  name: "TestimonialComponent",
  props: {
    src: String,
  },
};
</script>
<style scoped>
.formatframe {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}
iframe {
  max-width: 100% !important;
}
@media screen and (max-width: 1120px) {
  .formatframe {
    height: 70%;
    width: 85%;
    margin-left: 8%;
    margin-top: 2%;
  }
}
</style>
