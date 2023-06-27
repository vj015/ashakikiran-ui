<template>
  <div class="main">
    <img
      src="../assets/images/whatsapp.webp"
      alt="Whatsapp Us"
      @click="redirect()"
      class="whatsappimg"
    />
  </div>
</template>
<script>
export default {
  methods: {
    redirect() {
      //   this.$router.push("https://wa.me/9076526926");
      window.location.href = "https://wa.me/9076526926";
    },
  },
};
</script>
<style>
.main {
  display: flex;
  justify-content: flex-end;
}
.whatsappimg {
  height: 5%;
  width: 15%;
  animation: mymove 5s infinite;
}
@keyframes mymove {
  from {
    width: 5%;
  }
  to {
    width: 6%;
  }
}
@media screen and (max-width: 775px) {
  .whatsappimg {
    height: 20%;
    width: 15%;
    animation: none;
  }
}
</style>
