<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="1000"
      style="text-shadow: 0px 0px 2px #000"
      no-animation
    >
      <b-carousel-slide
        caption="Asha Ki Kiran"
        text="Join Hands with Us to Give Every Child a Better Tomorrow: Your Donation Can Make a Difference!"
      >
        <template #img>
          <img
            class="d-block img-fluid w-100 formatimg"
            src="../assets/images/BG_2M.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide
        caption="Asha Ki Kiran"
        text="Help Us Give a Voice to Every Child in Need: Your Donation Can Change Their Lives Forever!"
      >
        <template #img>
          <img
            class="d-block img-fluid w-100 formatimg"
            src="../assets/images/BG_4.webp"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide
        caption="Asha Ki Kiran"
        text="Together, Lets make a better world!"
      >
        <template #img>
          <img
            class="d-block img-fluid w-100 formatimg"
            src="../assets/images/BG_5M.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide
        caption="Asha Ki Kiran"
        text="Empowering Children to Reach Their Full Potential: Together We Can Make a Difference!"
      >
        <template #img>
          <img
            class="d-block img-fluid w-100 formatimg"
            src="../assets/images/BG_1M.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide
        caption="Asha Ki Kiran"
        text="Building a Brighter Future for Every Child: Join Us on the Journey!"
      >
        <template #img>
          <img
            class="d-block img-fluid w-100 formatimg"
            src="../assets/images/BG_6M.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
.formatimg {
  height: 600px !important;
  opacity: 0.7;
}
.carousel-caption {
  position: absolute;
  right: 15%;
  top: 20%;
  bottom: 1.25rem;
  left: 15%;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: #fff;
  text-align: center;
}

.carousel-caption h3 {
  font-size: xxx-large;
  font-weight: bold;
  color: #ff0003;
  font-family: inherit;
}
.carousel-caption p {
  font-size: x-large;
  font-weight: bolder;
  color: #000000;
  font-family: inherit;
  font-style: italic;
}
</style>
