<template>
  <footer class="footer-distributed">
    <div class="footer-left">
      <h3>Asha Ki<span>Kiran</span></h3>

      <p class="footer-links">
        <a href="#">Home</a>
        |
        <a href="/about">About</a>
        |
        <a href="/work?fundraising=true">Fundraisings</a>
        |
        <a href="/work?events=true">Celebrate with us</a>
      </p>

      <p class="footer-company-name">
        Copyright © 2023 <strong>Asha Ki Kiran Foundation</strong>
      </p>
    </div>

    <div class="footer-center">
      <div>
        <font-awesome-icon icon="fa-solid fa-location-dot" color="#ff0003" />
        <p>Kanpur, U.P</p>
      </div>

      <div>
        <font-awesome-icon icon="fa-solid fa-phone" color="#ff0003" />
        <p>+91 9076526926</p>
      </div>
      <div>
        <font-awesome-icon icon="fa-solid fa-envelope" color="#ff0003" />
        <p>
          <a href="mailto:ashakikiran@gmail.com">support@ashakikiran.in</a>
        </p>
      </div>
      <b-button
        class="stylbtn mt-4"
        style="font-family: fantasy; border: none; color: #ffdb6f"
        @click="redirect()"
        >Donate us!</b-button
      >
    </div>
    <div class="footer-right">
      <div class="footer-company-about">
        <span>Send us a message</span>
        <b-form-input
          placeholder=" Full Name"
          class="mt-2"
          v-model="form.name"
        ></b-form-input>
        <b-input-group prepend="+91" class="mt-2 mr-sm-2 mb-sm-0">
          <b-form-input
            id="mobile"
            placeholder="Mobile Number"
            v-model="form.number"
          ></b-form-input>
        </b-input-group>
        <b-form-textarea
          id="textarea"
          placeholder="Message"
          rows="3"
          max-rows="6"
          class="mt-2 mb-2"
          v-model="form.msg"
        ></b-form-textarea>
        <b-button
          class="stylbtn"
          style="font-family: fantasy; border: none; color: #ffdb6f"
          @click="sendsms()"
          >Send</b-button
        >
      </div>
      <div class="footer-icons">
        <a href="https://www.facebook.com/profile.php?id=100093668083368"
          ><font-awesome-icon icon="fa-brands fa-facebook"
        /></a>
        <a href="https://www.instagram.com/ashakikiranfoundation/"
          ><font-awesome-icon icon="fa-brands fa-instagram"
        /></a>
        <a href="https://www.linkedin.com/in/vipul-jain-io/"
          ><font-awesome-icon icon="fa-brands fa-linkedin"
        /></a>
        <a href="https://www.youtube.com/@ashakikiranfreeeducation"
          ><font-awesome-icon icon="fa-brands fa-youtube"
        /></a>
      </div>
    </div>
  </footer>
</template>
<script>
import swal from "sweetalert";
import router from "@/router";
import AuthenticationServices from "../Services/AuthenticationServices";
export default {
  name: "FooterComponent",
  data() {
    return {
      form: {
        name: "",
        msg: "",
        number: "",
      },
    };
  },
  methods: {
    sendsms() {
      console.log("Sending sms");
      AuthenticationServices.sendsms(JSON.stringify(this.form))
        .then((res) => {
          if (res.status === 200) {
            this.form.number = "";
            this.form.msg = "";
            this.form.name = "";
            console.log("Success");
            swal({
              title: "Message Sent successfully!",
              icon: "success",
            }).then(() => {
              router.push("/");
            });
          }
        })
        .catch((err) => {
          console.log(err);
          this.form.number = "";
          this.form.msg = "";
          this.form.name = "";
          swal({
            title: "Failed to Send Message.Try after some time!",
            icon: "error",
          }).then(() => {
            router.push("/");
          });
        });
    },
    redirect() {
      this.$router.push({ name: "Donate" });
    },
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}

body {
  font-family: "Poppins", sans-serif;
}

html {
  background-color: #eaf0f2;
}
.stylbtn {
  background-color: #ff0003;
}
.stylbtn :hover {
  background-color: #ffe28c;
}

.footer-distributed {
  background-color: #2d2a30;
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: bold 16px sans-serif;
  padding: 50px 50px 60px 50px;
  margin-top: 80px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
  display: inline-block;
  vertical-align: top;
}

/* Footer left */

.footer-distributed .footer-left {
  width: 30%;
}

.footer-distributed h3 {
  color: #ffffff;
  font: normal 36px "Cookie", cursive;
  margin: 0;
}

.footer-distributed h3 span {
  color: #ff0003;
}

/* Footer links */

.footer-distributed .footer-links {
  color: #ffdb6f;
  margin: 20px 0 12px;
}

.footer-distributed .footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
  font-family: math;
}

.footer-distributed .footer-company-name {
  color: #ff0003;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
  font-family: cursive;
}

/* Footer Center */

.footer-distributed .footer-center {
  width: 35%;
}

.footer-distributed .footer-center i {
  background-color: #33383b;
  color: #ffffff;
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope {
  font-size: 17px;
  line-height: 38px;
}

.footer-distributed .footer-center p {
  display: inline-block;
  color: #ffffff;
  vertical-align: middle;
  margin: 0;
  font-family: math;
}

.footer-distributed .footer-center p span {
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}

.footer-distributed .footer-center p a {
  color: #ffdb6f;
  text-decoration: none;
  font-family: math;
}

/* Footer Right */

.footer-distributed .footer-right {
  width: 30%;
}

.footer-distributed .footer-company-about {
  line-height: 20px;
  color: #92999f;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}

.footer-distributed .footer-company-about span {
  display: block;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: math;
}

.footer-distributed .footer-icons {
  margin-top: 25px;
}

.footer-distributed .footer-icons a {
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: #2d2a30;
  border-radius: 2px;
  font-size: 20px;
  color: #ff0003;
  text-align: center;
  line-height: 35px;
  margin-right: 3px;
  margin-bottom: 5px;
}

.footer-distributed .footer-icons a:hover {
  background-color: #ffdb6f;
}

.footer-links a:hover {
  color: #ffdb6f;
}

@media (max-width: 880px) {
  .footer-distributed .footer-left,
  .footer-distributed .footer-center,
  .footer-distributed .footer-right {
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }
  .footer-distributed .footer-center i {
    margin-left: 0;
  }
}
</style>
