import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faBars,
  faUser,
  faXmark,
  faHeart,
  faThumbsUp,
  faShareFromSquare,
  faCircleUser,
  faEnvelope,
  faPhone,
  faLocationDot,
  faArrowRight,
  faArrowUp,
  faArrowDown,
  faHandHoldingHeart,
  faHandshakeAngle,
  faHandsHoldingChild,
  faLocationPin,
  faCalendarDays,
  faMessage,
  faCircleArrowRight,
  faBuildingNgo,
  faHandHoldingDollar,
  faRightToBracket,
  faArrowUpRightFromSquare,
  faAddressCard,
  faHouseChimneyUser,
  faHouseUser,
  faCircleXmark,
  faCheckCircle,
  faPaperPlane,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as liked } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faUserSecret,
  liked,
  faCircleUser,
  faEnvelope,
  faPhone,
  faLocationDot,
  faArrowRight,
  faArrowDown,
  faArrowUp,
  faHandHoldingHeart,
  faHandshakeAngle,
  faHandsHoldingChild,
  faLocationPin,
  faCalendarDays,
  faMessage,
  faCircleArrowRight,
  faBuildingNgo,
  faHandHoldingDollar,
  faRightToBracket,
  faArrowUpRightFromSquare,
  faAddressCard,
  faRightToBracket,
  faHouseChimneyUser,
  faHouseUser,
  faCircleXmark,
  faHeart,
  faCheckCircle,
  faCircleXmark,
  faRightToBracket,
  faPaperPlane,
  faShare
);
library.add(faBars);
library.add(faUser, faXmark, faHeart, faThumbsUp, faShareFromSquare);
library.add(faFacebook, faInstagram, faTwitter, faLinkedin, faYoutube);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
