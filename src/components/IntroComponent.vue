<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="1000"
      style="text-shadow: 0px 0px 2px #000"
      no-animation
    >
      <b-carousel-slide
        v-for="image in images"
        :key="image.id"
        :img-src="image.src"
      >
        <h3>{{ "Asha Ki Kiran" }}</h3>
        <p>{{ image.title }}</p>
        <b-btn
          >Explore More <font-awesome-icon icon="fa-solid fa-arrow-right"
        /></b-btn>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          id: 1,
          title:
            "Join Hands with Us to Give Every Child a Better Tomorrow: Your Donation Can Make a Difference!",
          src: require("../assets/images/BG_2M.webp"),
        },
        {
          id: 2,
          title:
            "Help Us Give a Voice to Every Child in Need: Your Donation Can Change Their Lives Forever!",
          src: require("../assets/images/BG_4.webp"),
        },
        {
          id: 3,
          title: "Together, Lets make a better world!",
          src: require("../assets/images/BG_5M.webp"),
        },
        {
          id: 4,
          title:
            "Empowering Children to Reach Their Full Potential: Together We Can Make a Difference!",
          src: require("../assets/images/BG_1M.webp"),
        },
        {
          id: 5,
          title:
            "Building a Brighter Future for Every Child: Join Us on the Journey!",
          src: require("../assets/images/BG_6M.webp"),
        },
      ],
    };
  },
};
</script>
<style>
.img-fluid {
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
