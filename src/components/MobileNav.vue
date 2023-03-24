<template>
  <div id="navigation-mobile">
    <ul>
      <li @click="handleredirect1('/')">Home</li>
      <li @click="handleredirect1('/about')">About us</li>
      <li @click="handleredirect1('/events')">Our Work</li>
      <li @click="handleredirect1('/join')">Get Involved</li>
      <li @click="handleredirect1('/contactus')">Contact</li>
      <li @click="handleredirect1('/register')">Register</li>
    </ul>
    <!-- <div class="social-media">
      <font-awesome-icon icon="fa-brands fa-facebook" class="ic" />
      <font-awesome-icon icon="fa-brands fa-instagram" class="ic" />
      <font-awesome-icon icon="fa-brands fa-twitter" class="ic" />
      <font-awesome-icon icon="fa-brands fa-linkedin" class="ic" />
    </div> -->
  </div>
</template>

<script>
export default {
  name: "MobileNav",
  methods: {
    handleredirect1(str) {
      this.$emit("togglesidebar", str);
    },
  },
};
</script>

<style scoped>
#navigation-mobile {
  padding: 20px 0 0 0;
}
#navigation-mobile ul {
  list-style: none;
  width: 250px;
  padding-left: 30px;
}
#navigation-mobile ul li {
  color: #141313;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
}
#navigation-mobile ul li:hover {
  color: #111;
}
.social-media {
  position: absolute;
  left: 40px;
  bottom: 20px;
}
.ic {
  margin: 0 20px 0 0;
}
</style>
