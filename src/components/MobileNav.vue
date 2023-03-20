<template>
  <div id="navigation-mobile">
    <ul>
      <li>Home</li>
      <li>About us</li>
      <li>Our Work</li>
      <li>Get Involved</li>
      <li>Contact</li>
      <li>Register</li>
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
