<template>
  <div>
    <div class="row outer" v-if="!mobileview">
      <div class="col-1">
        <div class="formatlogo">
          <img src="../assets/AshaKiKiran_logo.jpg" alt="Logo" class="logo" />
          <!-- <span>Asha Ki Kiran</span> -->
        </div>
      </div>
      <div class="col-9 mt-1">
        <b-nav small>
          <b-nav-item href="/" class="formatnavtabs">Home </b-nav-item>
          <b-nav-item href="/events" class="formatnavtabs">About-us</b-nav-item>
          <b-nav-item href="/about" class="formatnavtabs">Our-Work</b-nav-item>
          <b-nav-item href="/subscribe" class="formatnavtabs"
            >Get-Involved
          </b-nav-item>
          <b-nav-item href="/subscribe" class="formatnavtabs"
            >Contact
          </b-nav-item>
          <!-- <b-nav-item href="/subscribe" class="formatnavtabs"
            >Register
          </b-nav-item> -->
          <b-nav-item-dropdown text="Register" class="formatnavtabs">
            <b-dropdown-item href="#">Login</b-dropdown-item>
            <b-dropdown-item href="#">Signup</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav>
      </div>
      <div class="col-2 formatdonate">
        <b-button>Donate us</b-button>
      </div>
      <!-- <div class="col-1 formaticon">
        <b-dropdown class="abc">
          <template #button-content>
            <font-awesome-icon icon="fa-solid fa-user" />
          </template>
          <b-dropdown-item href="#">Register</b-dropdown-item>
          <b-dropdown-item href="#">Sign in</b-dropdown-item>
        </b-dropdown>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      mobileview: false,
      mobileWidth: window.innerWidth,
    };
  },
  methods: {
    handlemobileview() {
      this.mobileview = window.innerWidth <= 934;
    },
  },
  created() {
    window.addEventListener("resize", this.handlemobileview);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.handlemobileview);
  },
};
</script>
<style scoped>
.logo {
  height: 120px;
  width: 120px;
  border-radius: 100px;
}
.formatlogo {
  left: 0px;
}
.formatlogo span {
  margin-left: 8px;
  font-family: fantasy;
  font-weight: bold;
}
.nav-item a {
  color: black !important;
}
.nav-item a:hover {
  color: black !important;
  text-decoration: underline;
}
li.nav-item.formatnavtabs {
  margin: 25px;
  font-family: fantasy;
}
.nav {
  justify-content: center;
  flex-wrap: wrap;
  --bs-nav-link-padding-x: 0rem;
}
.formatdonate {
  margin-top: 25px;
}
.formaticon {
  margin-top: 25px;
}
.btn-secondary {
  --bs-btn-color: #fff;
  --bs-btn-bg: #ff0003;
  --bs-btn-border-color: #ffe38f;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #ff0003;
  --bs-btn-hover-border-color: #ffe38f;
}
.outer {
  margin-left: 25px;
  margin-top: 5px;
}
@media screen and (max-width: 1105px) {
  .logo {
    height: 105px;
    width: 105px;
    border-radius: 100px;
  }
  .outer {
    margin-left: 18px;
    margin-top: 5px;
  }
}
@media screen and (max-width: 1096px) {
  .logo {
    height: 95px;
    width: 95px;
    border-radius: 90px;
  }
  .outer {
    margin-left: 14px;
    margin-top: 5px;
  }
}
</style>
