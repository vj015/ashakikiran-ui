<template>
  <div class="container mt-4">
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="4">
          <b-card-img
            :src="require('../assets/images/signup.webp')"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="8">
          <b-card-body>
            <b-card-text>
              <div>
                <div class="m-4">
                  <b-form-input
                    type="number"
                    placeholder="Enter your mobile number"
                    v-model="form.username"
                    @blur="verifyusername()"
                  ></b-form-input>
                  <b-alert show variant="danger" v-if="this.showwarning"
                    >Invalid Username
                    <font-awesome-icon
                      icon="fa-solid fa-circle-xmark"
                      style="color: rgb(132 32 41)"
                  /></b-alert>
                  <b-alert show variant="success" v-if="!this.unregistereduser"
                    >Verified
                    <font-awesome-icon
                      icon="fa-solid fa-circle-check"
                      style="color: rgb(15 81 50)"
                  /></b-alert>
                </div>
                <div class="m-4">
                  <b-form-input
                    type="password"
                    placeholder="Enter your password"
                    v-model="form.password"
                  ></b-form-input>
                </div>
                <div
                  class="m-4 d-flex flex-column justify-content-center align-items-center"
                >
                  <b-button
                    @click="login()"
                    variant="dark"
                    :disabled="this.unregistereduser"
                    style="font-family: fantasy"
                    >Login</b-button
                  >
                </div>
              </div>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
import swal from "sweetalert";
import AuthenticationServices from "../Services/AuthenticationServices";
import router from "@/router";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      unregistereduser: true,
      showwarning: false,
    };
  },
  computed: {},
  methods: {
    login() {
      AuthenticationServices.loginuser(JSON.stringify(this.form))
        .then((res) => {
          if (res.status === 200) {
            sessionStorage.setItem("frJWT", res.data.token);
            this.form.username = "";
            this.form.password = "";
            swal({
              title: "Successfully Logged in",
              icon: "success",
            }).then(() => {
              router.push("/");
            });
          }
        })
        .catch((err) => {
          if (err.response.status === 401) {
            this.form.username = "";
            this.form.password = "";
            this.unregistereduser = true;
            this.showwarning = false;
            swal({
              title: "Incorrect Password",
              icon: "error",
            }).then(() => {
              router.push("/login");
            });
          } else {
            this.form.username = "";
            this.form.password = "";
            this.unregistereduser = false;
            this.showwarning = false;
            swal({
              title:
                "Services are under maintainenece. Try again after some time",
              icon: "error",
            }).then(() => {
              router.push("/");
            });
          }
        });
    },
    verifyusername() {
      if (this.form.username.length > 0) {
        AuthenticationServices.verifyuser(this.form.username)
          .then((res) => {
            if (res.status === 200) {
              this.unregistereduser = false;
              this.showwarning = false;
            } else {
              this.showwarning = true;
              this.unregistereduser = true;
            }
          })
          .catch((err) => {
            this.showwarning = true;
            this.unregistereduser = true;
            console.log(err);
          });
      }
    },
  },
};
</script>
<style scoped>
.alert {
  padding: 0px;
  padding-left: 10px;
  margin-bottom: 0px;
  border-radius: 0px;
  margin-top: 2px;
  font-family: fantasy;
}
.btn-dark {
  --bs-btn-color: #212529;
  --bs-btn-bg: #ff0002;
  --bs-btn-border-color: #212529;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #424649;
  --bs-btn-hover-border-color: #e7d214;
  --bs-btn-focus-shadow-rgb: 66, 70, 73;
  --bs-btn-active-color: #282626;
  --bs-btn-active-bg: #4d5154;
  --bs-btn-active-border-color: #373b3e;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #cc7676;
  --bs-btn-disabled-border-color: #212529;
}
</style>
