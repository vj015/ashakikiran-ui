<template>
  <div>
    <div class="row outer" v-if="!mobileview">
      <div class="col-1">
        <div class="formatlogo">
          <img src="../assets/AshaKiKiran_logo.webp" alt="Logo" class="logo" />
          <!-- <span>Asha Ki Kiran</span> -->
        </div>
      </div>
      <div class="col-9 mt-1">
        <b-nav small>
          <b-nav-item href="/" class="formatnavtabs">Home </b-nav-item>
          <b-nav-item href="/about" class="formatnavtabs">About-us</b-nav-item>
          <b-nav-item-dropdown text="Our-Work" class="formatnavtabs" right>
            <b-dropdown-item href="/work?events=true">Events</b-dropdown-item>
            <b-dropdown-item href="/work?fundraising=true"
              >Fundraisings</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Register" class="formatnavtabs" right>
            <b-dropdown-item href="/register?member=true" v-if="!this.loggedin"
              >Register as Member</b-dropdown-item
            >
            <b-dropdown-item href="/register?intern=true"
              >Register as Intern</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item href="/contactus" class="formatnavtabs"
            >Contact
          </b-nav-item>
          <b-nav-item href="/login" class="formatnavtabs" v-if="!this.loggedin"
            ><font-awesome-icon icon="fa-solid fa-circle-user" size="lg" />
          </b-nav-item>
          <b-nav-item
            href="/userprofile"
            class="formatnavtabs"
            v-if="this.loggedin"
          >
            {{ this.username }}
          </b-nav-item>
        </b-nav>
      </div>
      <div class="col-2 formatdonate">
        <b-button style="font-family: fantasy">Donate</b-button>
      </div>
    </div>
    <div class="row" v-if="this.mobileview && !this.mobilesm">
      <div class="col-2">
        <font-awesome-icon
          icon="fa-solid fa-bars"
          class="formatbar"
          @click="opensummary"
          v-if="!this.open"
        />
        <font-awesome-icon
          icon="fa-solid fa-xmark"
          class="formatbar"
          @click="opensummary"
          v-if="this.open"
        />
      </div>
      <div class="col-6 adj">
        <img src="../assets/AshaKiKiran_logo.webp" alt="Logo" class="logo1" />
        <div class="akk" style="font-family: fantasy; color: #ff0003">
          Asha Ki Kiran
        </div>
      </div>
      <div class="col-4 formatdonate">
        <b-button style="font-family: fantasy" class="mob-btn">Donate</b-button>
      </div>
    </div>
    <div class="row" v-if="this.mobilesm">
      <div class="col">
        <font-awesome-icon
          icon="fa-solid fa-bars"
          class="formatbar"
          @click="opensummary"
          v-if="!this.open"
        />
        <font-awesome-icon
          icon="fa-solid fa-xmark"
          class="formatbar"
          @click="opensummary"
          v-if="this.open"
        />
      </div>
      <div class="col adj">
        <img src="../assets/AshaKiKiran_logo.webp" alt="Logo" class="logo1" />
        <div class="akk">
          <b-button style="font-family: fantasy">Donate</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  props: ["open"],
  data() {
    return {
      mobileview: false,
      mobileWidth: window.innerWidth,
      mobilesm: false,
      loggedin: false,
      username: "",
    };
  },
  methods: {
    handlemobileview() {
      this.mobileview = window.outerWidth <= 665;
      this.mobilesm = window.outerWidth <= 277;
    },
    opensummary() {
      this.$emit("togglesidebar");
    },
    login() {
      if (sessionStorage.getItem("username")) {
        this.loggedin = true;
        this.username = sessionStorage.getItem("username").substring(5);
      } else {
        this.loggedin = false;
        this.username = "";
      }
    },
  },
  mounted() {
    this.handlemobileview();
    this.login();
  },
  created() {
    window.addEventListener("resize", this.handlemobileview);
    this.login();
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.handlemobileview);
  },
  watch: {
    $route: function () {
      this.login();
    },
  },
};
</script>
<style>
.logo {
  height: 120px !important;
  width: 120px !important;
  border-radius: 100px !important;
}
.adj {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo1 {
  height: 120px !important;
  width: 120px !important;
  border-radius: 100px !important;
}
.formatbar {
  position: absolute;
  top: 30px;
  font-size: large;
  left: 25px;
  color: #ff0003;
}
.akk {
  font-weight: bold;
  font-style: italic;
}
.formatlogo {
  left: 0px !important;
}
.nav-item a {
  color: black !important;
  font-size: large;
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
.nav-link {
  color: black !important;
  font-size: large;
}
.formatdonate {
  margin-top: 25px !important;
}
.formaticon {
  margin-top: 25px;
}
.btn-secondary {
  --bs-btn-color: #fff !important;
  --bs-btn-bg: #ff0003 !important;
  --bs-btn-border-color: #ffe38f !important;
  --bs-btn-hover-color: #fff !important;
  --bs-btn-hover-bg: #ff0003 !important;
  --bs-btn-hover-border-color: #ffe38f !important;
}
.outer {
  margin-left: 25px !important;
  margin-top: 5px !important;
}
@media screen and (max-width: 1105px) {
  .logo {
    height: 105px;
    width: 105px;
    border-radius: 100px;
  }
  .outer {
    margin-left: 18px !important;
    margin-top: 5px !important;
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
@media screen and (max-width: 934px) {
  .logo {
    height: 85px;
    width: 85px;
    border-radius: 80px;
  }
  .outer {
    margin-left: 12px;
    margin-top: 5px;
  }
}
@media screen and (max-width: 838px) {
  .logo {
    height: 80px;
    width: 80px;
    border-radius: 75px;
  }
  .outer {
    margin-left: 10px;
    margin-top: 5px;
  }
}
@media screen and (max-width: 727px) {
  .formatdonate {
    margin-top: 22px !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .outer {
    margin-left: 0px !important;
  }
}
@media screen and (max-width: 665px) {
  .logo1 {
    height: 100px;
    width: 100px;
    border-radius: 100px;
  }
  .mob-btn {
    width: 100px !important;
    position: absolute !important;
    right: 20px !important;
  }
}
@media screen and (max-width: 450px) {
  .logo1 {
    height: 100px;
    width: 100px;
    border-radius: 100px;
  }
  .mob-btn {
    width: 100px !important;
  }
}
@media screen and (max-width: 365px) {
  .adj {
    width: 175px;
  }
  .logo1 {
    height: 80px;
    width: 80px;
    border-radius: 80px;
  }
  .formatbar {
    position: absolute;
    top: 30px;
    font-size: small;
    left: 20px;
  }
  .mob-btn {
    width: 100px !important;
    position: absolute !important;
    right: 10px !important;
  }
}
@media screen and (max-width: 326px) {
  .adj {
    width: 150px;
  }
  .logo1 {
    height: 60px;
    width: 60px;
    border-radius: 60px;
  }
  .formatbar {
    position: absolute;
    top: 30px;
    font-size: small;
    left: 20px;
  }
  .mob-btn {
    width: 100px !important;
    position: absolute !important;
    right: 10px !important;
  }
}
@media screen and (max-width: 277px) {
  .adj {
    width: 130px;
  }
  .logo1 {
    height: 80px;
    width: 80px;
    border-radius: 60px;
  }
}
</style>
