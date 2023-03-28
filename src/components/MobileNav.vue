<template>
  <div id="navigation-mobile">
    <div>
      <ul>
        <li @click="handleredirect1('/')">
          Home
          <font-awesome-icon icon="fa-solid fa-house-user" />
        </li>
        <li @click="handleredirect1('/about')">
          About us <font-awesome-icon icon="fa-solid fa-building-ngo" />
        </li>
        <li @click="handleredirect1('/work?events=true')">
          Events with us <font-awesome-icon icon="fa-solid fa-calendar-days" />
        </li>
        <li @click="handleredirect1('/work?fundraising=true')">
          Fundraisings
          <font-awesome-icon icon="fa-solid fa-hand-holding-dollar" />
        </li>
        <li @click="handleredirect1('/register?member=true')">
          Membership <font-awesome-icon icon="fa-solid fa-circle-arrow-right" />
        </li>
        <li @click="handleredirect1('/register?intern=true')">
          Internships
          <font-awesome-icon icon="fa-solid fa-circle-arrow-right" />
        </li>
        <li @click="handleredirect1('/contactus')">
          Contact us <font-awesome-icon icon="fa-solid fa-address-card" />
        </li>
        <li @click="handleredirect1('/login')">
          Login <font-awesome-icon icon="fa-solid fa-right-to-bracket" />
        </li>
      </ul>
    </div>
    <div class="social-media">
      <font-awesome-icon icon="fa-brands fa-facebook" class="ic" />
      <font-awesome-icon icon="fa-brands fa-instagram" class="ic" />
      <font-awesome-icon icon="fa-brands fa-twitter" class="ic" />
      <font-awesome-icon icon="fa-brands fa-linkedin" class="ic" />
    </div>
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
  display: flex;
  flex-direction: column;
  row-gap: 100px;
}
#navigation-mobile ul {
  list-style: none;
  width: 250px;
  padding-left: 30px;
}
#navigation-mobile ul li {
  color: #141313;
  font-family: fantasy;
  font-size: x-large;
  margin-bottom: 20px;
  cursor: pointer;
}
#navigation-mobile ul li:hover {
  color: #111;
}
.social-media {
  margin: auto;
}
.ic {
  margin: 0 20px 0 0;
  font-size: x-large;
}
</style>
