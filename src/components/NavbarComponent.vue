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
          <b-nav-item href="/subscribe" class="formatnavtabs"
            >Register
          </b-nav-item>
        </b-nav>
      </div>
      <div class="col-2 formatdonate">
        <b-button>Donate</b-button>
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
        <img src="../assets/AshaKiKiran_logo.jpg" alt="Logo" class="logo1" />
        <div class="akk">Asha Ki Kiran</div>
      </div>
      <div class="col-4 formatdonate">
        <b-button class="mob-btn">Donate</b-button>
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
        <img src="../assets/AshaKiKiran_logo.jpg" alt="Logo" class="logo1" />
        <div class="akk"><b-button>Donate</b-button></div>
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
  },
  mounted() {
    this.handlemobileview();
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
.adj {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo1 {
  height: 120px;
  width: 120px;
  border-radius: 100px;
}
.formatbar {
  position: absolute;
  top: 30px;
  font-size: large;
  left: 25px;
}
.akk {
  font-weight: bold;
  font-style: italic;
}
.formatlogo {
  left: 0px;
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
    margin-top: 22px;
    padding-left: 0px;
    padding-right: 0px;
  }
  .outer {
    margin-left: 0px;
  }
}
@media screen and (max-width: 665px) {
  .logo1 {
    height: 100px;
    width: 100px;
    border-radius: 100px;
  }
  .mob-btn {
    width: 100px;
    position: absolute;
    right: 20px;
  }
}
@media screen and (max-width: 450px) {
  .logo1 {
    height: 100px;
    width: 100px;
    border-radius: 100px;
  }
  .mob-btn {
    width: 100px;
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
    width: 100px;
    position: absolute;
    right: 10px;
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
    width: 100px;
    position: absolute;
    right: 10px;
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
