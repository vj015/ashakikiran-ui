<template>
  <div id="navigation-mobile">
    <ul>
      <li>Home</li>
      <li>Articles</li>
      <li>Magazines</li>
      <li>Editors</li>
      <li>Readers</li>
    </ul>
    <div class="social-media">
      <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-pinterest"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationMobile",
};
</script>

<style scoped>
#navigation-mobile {
  padding: 20px 0 0 0;
}
#navigation-mobile ul {
  list-style: none;
  width: 200px;
  padding-left: 40px;
}
#navigation-mobile ul li {
  color: #a53636;
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
.social-media i {
  margin: 0 20px 0 0;
  color: #fff;
  font-size: 2rem;
}
</style>
